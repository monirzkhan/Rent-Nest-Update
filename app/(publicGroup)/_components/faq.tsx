"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is RentNest?",
    answer:
      "RentNest is a rental property marketplace that connects tenants with landlords. Tenants can explore available properties, view property details, and submit rental requests, while landlords can list and manage their properties.",
  },
  {
    question: "How can I find a property on RentNest?",
    answer:
      "You can browse available properties from the Properties section and use the available search and filtering options to find properties based on your preferred location, rent range, property type, bedrooms, and other requirements.",
  },
  {
    question: "How do I rent a property?",
    answer:
      "After finding a property you like, open its details page and submit a rental request. The landlord can then review your request. Once your request is approved, you can proceed with the required payment process.",
  },
  {
    question: "Can I list my property on RentNest?",
    answer:
      "Yes. If you are a landlord, you can create an account and add your property with information such as title, description, location, rent amount, bedrooms, bathrooms, area, images, and other relevant details.",
  },
  {
    question: "Is RentNest available for both tenants and landlords?",
    answer:
      "Yes. RentNest supports both tenants and landlords. Tenants can search for rental properties and submit rental requests, while landlords can publish properties and manage rental requests.",
  },
  {
    question: "How does the rental request process work?",
    answer:
      "A tenant submits a request for a property, and the landlord reviews the request. The landlord can approve or reject it. If approved, the tenant can continue with the payment process and complete the rental.",
  },
  {
    question: "Are payments secure on RentNest?",
    answer:
      "RentNest uses a secure payment process to handle rental payments. Payment information is processed through the integrated payment provider rather than being directly stored by RentNest.",
  },
  {
    question: "Can I manage my rental requests?",
    answer:
      "Yes. Tenants can track their submitted rental requests, while landlords can review and manage requests received for their properties from their respective dashboards.",
  },
  {
    question: "How can I contact RentNest?",
    answer:
      "You can contact the RentNest team through the Contact section of the website. Our support team can help with questions about properties, rental requests, accounts, and other platform-related issues.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* Background decorations */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <HelpCircle size={17} />
            Frequently Asked Questions
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything You Need to{" "}
            <span className="text-primary">Know</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Have questions about finding a property, listing your home, or
            renting through RentNest? We&apos;ve got you covered.
          </p>
        </motion.div>

        {/* FAQ Content */}
        <div className="mx-auto max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-primary/20 shadow-md"
                      : "border-slate-200 shadow-sm hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >
                    <span
                      className={`text-sm font-semibold sm:text-base ${
                        isOpen ? "text-primary" : "text-slate-900"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-primary text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <ChevronDown
                        size={17}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="border-t border-slate-100 px-5 pb-6 pt-4 sm:px-6">
                          <p className="text-sm leading-7 text-slate-600">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 max-w-4xl rounded-2xl border border-primary/10 bg-primary/5 px-6 py-7 text-center sm:px-8"
        >
          <h3 className="text-lg font-semibold text-slate-900">
            Still have questions?
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Our team is here to help you with your rental journey.
          </p>

          <a
            href="/contact"
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}