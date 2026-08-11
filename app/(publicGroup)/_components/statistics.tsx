import { cookies } from "next/headers";
import StatisticsClient from "./StatisticsClient";

const API_URL = "https://rentnest-seven.vercel.app/api";

const Statistics = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('accessToken')?.value;
    const [propertiesRes, usersRes, rentalRequestsRes] =
      await Promise.all([
        fetch(`${API_URL}/properties`, {
          next: { revalidate: 60 },
        }),

        fetch(`${API_URL}/admin/users`, {
          next: { revalidate: 60 },
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }),

        fetch(`${API_URL}/admin/rentals`, {
          next: { revalidate: 60 },
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          }
        }),
      ]);

    const propertiesData = propertiesRes.ok
      ? await propertiesRes.json()
      : null;

    const usersData = usersRes.ok
      ? await usersRes.json()
      : null;

    const rentalRequestsData = rentalRequestsRes.ok
      ? await rentalRequestsRes.json()
      : null;

    const properties = propertiesData?.data || [];
    const users = usersData?.data || [];

    const rentalRequests = rentalRequestsData?.data || [];
    console.log( rentalRequests, "from Statistics");

    const totalProperties = properties.length;

    const totalTenants = users.filter(
      (user: any) => user.role === "TENANT"
    ).length;

    const totalLandlords = users.filter(
      (user: any) => user.role === "LANDLORD"
    ).length;

    const totalRentalRequests = rentalRequests.length;

    return (
      <StatisticsClient
        totalProperties={totalProperties}
        totalTenants={totalTenants}
        totalLandlords={totalLandlords}
        totalRentalRequests={totalRentalRequests}
      />
    );
  } catch (error) {
    console.error("Statistics fetching error:", error);

    return (
      <StatisticsClient
        totalProperties={0}
        totalTenants={0}
        totalLandlords={0}
        totalRentalRequests={0}
      />
    );
  }
};

export default Statistics;