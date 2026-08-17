import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiArrowUpRight } from "react-icons/fi";

const faqs = [
  {
    question: "What is Bluespot 3.0?",
    answer:
      "Bluespot 3.0 is a plotted development by Manju Groups, positioned around the ECR coastal corridor and presented as a destination for future homes and real-estate investment.",
  },
  {
    question: "Where is Bluespot 3.0 located?",
    answer:
      "Bluespot 3.0 is positioned along the ECR corridor. Please contact our property team for the exact project location, Google Maps pin and site-visit details.",
  },
  {
    question: "What plot sizes are available?",
    answer:
      "Plot sizes and availability can vary. Contact our property advisor to know the currently available plot dimensions and inventory.",
  },
  {
    question: "What is the price per square feet?",
    answer:
      "The price may vary depending on the plot and current project offer. Get in touch with our team for the latest official pricing and available plots.",
  },
  {
    question: "Is EMI available for Bluespot 3.0?",
    answer:
      "EMI or financing availability depends on the project's approved payment structure and applicable financing terms. Our team can provide the latest EMI and payment details.",
  },
  {
    question: "Can I schedule a site visit?",
    answer:
      "Yes. You can submit the enquiry form and our property team can assist you with site-visit arrangements and project details.",
  },
  {
    question: "What documents should I check before buying?",
    answer:
      "Property documentation should always be verified before purchase. Our team can guide you on the project documents and the information you should review before making a decision.",
  },
  {
    question: "How can I book a plot?",
    answer:
      "Submit an enquiry through the website and our property advisor will contact you with the current availability, pricing, payment process and booking requirements.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  };

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#f7f5ef] py-24 text-[#062033] sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#0b5d83]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0b5d83]">
                FAQ
              </span>
            </div>

            <p className="text-sm uppercase tracking-[0.2em] text-[#062033]/35">
              Bluespot 3.0
            </p>
          </div>

          <h2 className="font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-8xl">
            Questions?
            <br />

            <span className="italic text-[#0b5d83]">
              We've got answers.
            </span>
          </h2>
        </motion.div>

        {/* FAQ CONTENT */}

        <div className="mt-16 grid gap-5 lg:grid-cols-[0.65fr_1.35fr]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between rounded-[1.5rem] bg-[#062033] p-7 text-white sm:p-9 lg:p-10"
          >
            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B77A]">
                Need more information?
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Let's talk about
                <br />

                <span className="text-white/40">
                  your plot.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/50">
                Have a question that isn't answered here?
                Our property team can help you with pricing,
                availability, location and site visits.
              </p>

            </div>

            <button
              onClick={scrollToContact}
              className="group mt-10 flex w-fit items-center gap-3 rounded-full bg-[#D9B77A] px-6 py-4 text-sm font-semibold text-[#062033] transition hover:bg-white"
            >
              Talk to an Advisor

              <FiArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>
          </motion.div>

          {/* RIGHT FAQ LIST */}

          <div className="space-y-3">

            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.04,
                  }}
                  className={`overflow-hidden rounded-[1.15rem] border transition-all duration-300 ${
                    isOpen
                      ? "border-[#0b5d83]/30 bg-white shadow-lg"
                      : "border-[#062033]/10 bg-white/70"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                  >
                    <div className="flex items-start gap-4">

                      <span
                        className={`mt-1 text-xs font-semibold tracking-[0.15em] ${
                          isOpen
                            ? "text-[#0b5d83]"
                            : "text-[#062033]/25"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      <span
                        className={`text-sm font-semibold sm:text-base ${
                          isOpen
                            ? "text-[#062033]"
                            : "text-[#526774]"
                        }`}
                      >
                        {faq.question}
                      </span>

                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 border-[#0b5d83] bg-[#0b5d83] text-white"
                          : "border-[#062033]/10 text-[#0b5d83]"
                      }`}
                    >
                      <FiChevronDown size={16} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        <div className="border-t border-[#062033]/10 px-5 pb-6 pt-5 sm:px-7">
                          <p className="max-w-2xl pl-9 text-sm leading-7 text-[#61737e]">
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

        {/* BOTTOM CTA */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-col gap-5 border-t border-[#062033]/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-[#526774]">
            Still deciding? Get the latest project details directly
            from our property team.
          </p>

          <button
            onClick={scrollToContact}
            className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0b5d83]"
          >
            Get Project Details

            <FiArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;