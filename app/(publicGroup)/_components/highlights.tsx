"use client";

import {
  BadgeCheck,
  Building2,
  KeyRound,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Building2,
    title: "Verified Properties",
    description:
      "Explore carefully listed rental properties with clear details, photos, pricing, and location information.",
  },
  {
    icon: MapPin,
    title: "Find the Right Location",
    description:
      "Discover properties in your preferred area and find a home that fits your lifestyle and budget.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Built with secure authentication and trusted rental workflows to make your renting experience safer.",
  },
  {
    icon: KeyRound,
    title: "Easy Rental Process",
    description:
      "Send rental requests, track your applications, and manage your rental journey from one platform.",
  },
  {
    icon: Users,
    title: "For Tenants & Landlords",
    description:
      "A complete platform designed to connect tenants with property owners in a simple and efficient way.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Information",
    description:
      "Get important property information upfront so you can make better rental decisions with confidence.",
  },
];

export default function Highlights() {
  return (
    <section className="relative overflow-hidden bg-white py-10 lg:py-8">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Why Choose RentNest?
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything You Need to
            <span className="block text-blue-600">
              Find Your Perfect Rental
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            RentNest makes property discovery and rental management easier,
            safer, and more convenient for both tenants and landlords.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Hover Background */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-50 opacity-0 transition-all duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl bg-slate-900 px-6 py-8 sm:flex-row sm:px-10"
        >
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Ready to find your next home?
            </h3>

            <p className="mt-2 text-sm text-red-400">
              Browse available properties and start your rental journey today.
            </p>
          </div>

          <a
            href="/properties"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20"
          >
            Explore Properties
          </a>
        </motion.div>
      </div>
    </section>
  );
}