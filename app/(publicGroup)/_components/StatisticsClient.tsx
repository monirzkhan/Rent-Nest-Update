"use client";

import {
  Building2,
  FileText,
  Home,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

interface StatisticsClientProps {
  totalProperties: number;
  totalTenants: number;
  totalLandlords: number;
  totalRentalRequests: number;
}

const StatisticsClient = ({
  totalProperties,
  totalTenants,
  totalLandlords,
  totalRentalRequests,
}: StatisticsClientProps) => {
  const statistics = [
    {
      value: totalProperties,
      label: "Properties Listed",
      description: "Available rental properties",
      icon: Building2,
    },
    {
      value: totalTenants,
      label: "Tenants",
      description: "Registered tenants",
      icon: Users,
    },
    {
      value: totalLandlords,
      label: "Landlords",
      description: "Property owners",
      icon: Home,
    },
    {
      value: totalRentalRequests,
      label: "Rental Requests",
      description: "Requests submitted",
      icon: FileText,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-24">
      {/* Background */}
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            RentNest in Numbers
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Growing Together,
            <span className="block text-blue-500">
              One Rental at a Time
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Real-time statistics from the RentNest platform.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:bg-white/[0.07]"
              >
                {/* Top line */}
                <div className="absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-0 bg-blue-500 transition-transform duration-500 group-hover:scale-x-100" />

                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                {/* Number */}
                <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {stat.value.toLocaleString()}+
                </h3>

                {/* Label */}
                <p className="mt-2 text-base font-semibold text-slate-200">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="mt-1 text-sm text-green-500">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsClient;