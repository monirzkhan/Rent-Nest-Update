"use client";

import { motion } from "framer-motion";
import { Quote, Star, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Tenant",
    location: "Dhaka",
    initials: "SA",
    rating: 5,
    review:
      "RentNest made finding my new apartment incredibly easy. I could compare properties, check the details, and send a rental request without wasting time.",
    featured: true,
  },
  {
    id: 2,
    name: "Rakib Hasan",
    role: "Landlord",
    location: "Uttara",
    initials: "RH",
    rating: 5,
    review:
      "As a landlord, RentNest has helped me connect with genuine tenants much faster. The platform is simple, professional, and easy to manage.",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Tenant",
    location: "Mirpur",
    initials: "NJ",
    rating: 5,
    review:
      "I really liked how organized everything was. Finding a suitable place and submitting a rental request was much easier than using traditional property listings.",
  },
  {
    id: 4,
    name: "Tanvir Rahman",
    role: "Tenant",
    location: "Banani",
    initials: "TR",
    rating: 5,
    review:
      "The property information was clear and easy to understand. RentNest saved me a lot of time during my apartment search.",
  },
  {
    id: 5,
    name: "Farhana Akter",
    role: "Landlord",
    location: "Dhanmondi",
    initials: "FA",
    rating: 5,
    review:
      "Managing my property listing through RentNest has been very convenient. I can present my property professionally and communicate with potential tenants easily.",
  },
  {
    id: 6,
    name: "Mehedi Islam",
    role: "Tenant",
    location: "Mohammadpur",
    initials: "MI",
    rating: 5,
    review:
      "A very straightforward rental experience. The interface is clean, the property cards are useful, and the whole process feels much more modern.",
  },
];

const stats = [
  { value: "4.9/5", label: "Average Rating" },
  { value: "1,200+", label: "Happy Users" },
  { value: "98%", label: "Satisfaction Rate" },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
      {/* Background decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
          >
            <Quote size={16} />
            What Our Users Say
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Trusted by Renters &{" "}
            <span className="text-primary">Landlords</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-base leading-7 text-slate-600 sm:text-lg"
          >
            See why people are choosing RentNest to make their rental
            experience simpler, faster, and more convenient.
          </motion.p>
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 overflow-hidden rounded-3xl bg-primary p-8 shadow-xl sm:p-10 lg:p-12"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-5 flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    className="fill-current text-yellow-300"
                  />
                ))}
              </div>

              <Quote
                size={42}
                className="mb-4 text-white/20"
                strokeWidth={2.5}
              />

              <blockquote className="max-w-3xl text-xl font-medium leading-9 text-white sm:text-2xl lg:text-3xl">
                “{testimonials[0].review}”
              </blockquote>

              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 font-semibold text-white">
                  {testimonials[0].initials}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-white">
                      {testimonials[0].name}
                    </p>
                    <CheckCircle2
                      size={16}
                      className="text-green-300"
                    />
                  </div>

                  <p className="text-sm text-white/70">
                    {testimonials[0].role} · {testimonials[0].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="hidden rounded-2xl border border-white/10 bg-white/10 p-7 text-center lg:block">
              <p className="text-5xl font-bold text-white">4.9</p>

              <div className="my-3 flex justify-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className="fill-current text-yellow-300"
                  />
                ))}
              </div>

              <p className="text-sm text-white/70">
                Average user rating
              </p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Top */}
              <div className="mb-5 flex items-start justify-between">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className="fill-current text-yellow-400"
                    />
                  ))}
                </div>

                <Quote
                  size={26}
                  className="text-slate-200 transition-colors group-hover:text-primary/20"
                />
              </div>

              {/* Review */}
              <p className="min-h-[120px] text-sm leading-7 text-slate-600">
                “{testimonial.review}”
              </p>

              {/* User */}
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                  {testimonial.initials}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-slate-900">
                      {testimonial.name}
                    </p>

                    <CheckCircle2
                      size={14}
                      className="text-primary"
                    />
                  </div>

                  <p className="text-xs text-slate-500">
                    {testimonial.role} · {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid grid-cols-1 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="px-6 py-7 text-center"
            >
              <p className="text-3xl font-bold text-primary">
                {stat.value}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}