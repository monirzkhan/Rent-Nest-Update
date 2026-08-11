"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    // TODO: Connect this with your newsletter API
    console.log("Newsletter subscription:", email);

    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-8 lg:py-10">
      {/* Decorative background */}
      <div className="absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 shadow-xl sm:px-10 lg:px-16 lg:py-14"
        >
          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />
          <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute right-20 top-10 h-20 w-20 rounded-full bg-white/5" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
            {/* Content */}
            <div className="max-w-xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <Mail size={16} />
                Stay Updated
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Find Your Next Home
                <span className="mt-1 block text-white/70">
                  Before Everyone Else
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
                Subscribe to RentNest and get new property listings, rental
                tips, market updates, and exclusive offers delivered directly
                to your inbox.
              </p>

              {/* Benefits */}
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={17} />
                  No spam
                </div>

                <div className="flex items-center gap-2">
                  <ShieldCheck size={17} />
                  Useful updates
                </div>

                <div className="flex items-center gap-2">
                  <ShieldCheck size={17} />
                  Unsubscribe anytime
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md sm:p-5">
              {!submitted ? (
                <>
                  <div className="mb-5">
                    <h3 className="text-lg font-semibold text-white">
                      Join the RentNest community
                    </h3>

                    <p className="mt-1 text-sm text-white/60">
                      Enter your email to receive the latest updates.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <div className="relative flex-1">
                        <Mail
                          size={19}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          required
                          className="h-14 w-full rounded-xl border-0 bg-white pl-11 pr-4 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:ring-2 focus:ring-white/50"
                        />
                      </div>

                      <button
                        type="submit"
                        className="group flex h-14 items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 active:scale-[0.98]"
                      >
                        Subscribe
                        <ArrowRight
                          size={17}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </button>
                    </div>

                    <p className="mt-4 text-xs leading-5 text-white/50">
                      By subscribing, you agree to receive emails from
                      RentNest. You can unsubscribe at any time.
                    </p>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[180px] flex-col items-center justify-center text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                    <ShieldCheck
                      size={28}
                      className="text-white"
                    />
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-white">
                    You&apos;re subscribed!
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/65">
                    Thanks for joining RentNest. We&apos;ll keep you updated
                    with the latest rental opportunities.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}