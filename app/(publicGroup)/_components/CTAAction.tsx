"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Home,
  Search,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-primary px-5 py-12 shadow-2xl sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        >
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute right-24 top-16 hidden h-20 w-20 rounded-full bg-white/5 lg:block" />

          <div className="relative">
            {/* Main content */}
            <div className="mx-auto max-w-3xl text-center">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10"
              >
                <Home
                  size={28}
                  strokeWidth={1.8}
                  className="text-white"
                />
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Ready to Find Your
                <span className="block text-white/70">
                  Perfect Place?
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base"
              >
                Whether you&apos;re looking for a new home or want to rent out
                your property, RentNest makes the rental journey simple,
                convenient, and reliable.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
              >
                <Link
                  href="/properties"
                  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-primary shadow-lg transition-all duration-300 hover:bg-slate-50 hover:shadow-xl active:scale-[0.98] sm:w-auto"
                >
                  <Search size={17} />

                  <span>Find a Property</span>

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/dashboard/properties/add"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15 active:scale-[0.98] sm:w-auto"
                >
                  <Building2 size={17} />

                  <span>List Your Property</span>
                </Link>
              </motion.div>

              {/* Trust points */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-white/65 sm:gap-x-7 sm:text-sm"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} />
                  <span>Trusted Platform</span>
                </div>

                <div className="hidden h-4 w-px bg-white/20 sm:block" />

                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} />
                  <span>Easy Rental Process</span>
                </div>

                <div className="hidden h-4 w-px bg-white/20 sm:block" />

                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} />
                  <span>Secure Payment Process</span>
                </div>
              </motion.div>
            </div>

            {/* Audience Cards */}
            <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
              {/* Tenant Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Search
                      size={21}
                      className="text-white"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Looking for a home?
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-white/60">
                      Explore available properties and find a place that fits
                      your lifestyle and budget.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Landlord Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Building2
                      size={21}
                      className="text-white"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Have a property?
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-white/60">
                      List your property on RentNest and connect with potential
                      tenants.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}