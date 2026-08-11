import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from 'jsonwebtoken';

const AUTH_ROUTES = ['/login', '/register'];
const PUBLIC_ROUTES = [
    "/",
    "/properties",
    "/categories",
    "/about",
    "/blogs",
    "/contact"
];

export async function proxy(request: NextRequest) {
    const pathName = request.nextUrl.pathname;
    const accessToken = request.cookies.get('accessToken')?.value;

    let userRole: string | null = null;
    let isValidToken = false;

    if (accessToken) {
        try {
            const decodedToken = jwt.decode(accessToken) as JwtPayload | null;
            if (decodedToken && decodedToken.role) {
                const isExpired = decodedToken.exp ? decodedToken.exp * 1000 < Date.now() : false;
                if (!isExpired) {
                    userRole = decodedToken.role;
                    isValidToken = true;
                }
            }
        } catch {
            isValidToken = false;
        }
    }

    const isAuthRoute = AUTH_ROUTES.some((route) => pathName === route || pathName.startsWith(route + '/'));
    const isPublicRoute = PUBLIC_ROUTES.some((route) => pathName === route || (route !== '/' && pathName.startsWith(route + '/')));

    // If user has a valid token and tries to visit auth routes (/login, /register)
    if (isValidToken && isAuthRoute) {
        let redirectUrl = '/';
        if (userRole === "TENANT") {
            redirectUrl = '/dashboard/tenant';
        } else if (userRole === "LANDLORD") {
            redirectUrl = '/dashboard/landlord';
        } else if (userRole === "ADMIN") {
            redirectUrl = '/dashboard/admin';
        }
        return NextResponse.redirect(new URL(redirectUrl, request.url));
    }

    // If user does not have a valid token and tries to access a protected route
    if (!isValidToken && !isPublicRoute && !isAuthRoute) {
        const response = NextResponse.redirect(new URL('/login', request.url));
        if (accessToken) {
            response.cookies.delete('accessToken');
            response.cookies.delete('refreshToken');
        }
        return response;
    }

    // Authorization checks for authenticated users accessing dashboard routes
    if (isValidToken) {
        if (pathName.startsWith('/dashboard/tenant') && userRole !== 'TENANT') {
            return NextResponse.redirect(new URL('/not-found', request.url));
        }
        if (pathName.startsWith('/dashboard/landlord') && userRole !== 'LANDLORD') {
            return NextResponse.redirect(new URL('/not-found', request.url));
        }
        if (pathName.startsWith('/dashboard/admin') && userRole !== 'ADMIN') {
            return NextResponse.redirect(new URL('/not-found', request.url));
        }
    }

    const response = NextResponse.next();
    // Clean up invalid cookie if present
    if (accessToken && !isValidToken) {
        response.cookies.delete('accessToken');
        response.cookies.delete('refreshToken');
    }

    return response;
}

export const config = {
    matcher: [
        '/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)'
    ]
};