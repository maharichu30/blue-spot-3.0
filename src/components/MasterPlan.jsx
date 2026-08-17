import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiMaximize2,
  FiX,
  FiMap,
  FiCheckCircle,
} from "react-icons/fi";

import masterplanImage from "../assets/images/plot_layout.png";

const highlights = [
  "Well-planned plotted development",
  "Clearly defined internal roads",
  "Residential plot layout",
  "Planned open spaces",
];

const Masterplan = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="masterplan"
      className="relative overflow-hidden bg-[#f7f5ef] py-24 text-[#062033] sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#0b5d83]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0b5d83]">
                Masterplan
              </span>
            </div>

            <p className="text-sm uppercase tracking-[0.2em] text-[#062033]/35">
              Bluespot 3.0
            </p>
          </div>

          <h2 className="font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-8xl">
            Designed with
            <br />

            <span className="italic text-[#0b5d83]">
              a bigger vision.
            </span>
          </h2>
        </motion.div>

        {/* ================= INTRO ================= */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 max-w-2xl text-base leading-8 text-[#526774] sm:text-lg"
        >
          Explore the planned layout of Bluespot 3.0 and
          discover the possibilities waiting within this
          thoughtfully designed plotted development.
        </motion.p>

        {/* ================= MASTERPLAN IMAGE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
          className="group relative mt-14 overflow-hidden rounded-[1.5rem] bg-white p-2 shadow-sm sm:p-3"
        >
          <div className="relative overflow-hidden rounded-[1.15rem] bg-[#e7e5dc]">

            <img
              src={masterplanImage}
              alt="Blue Spot 3.0 masterplan"
              className="h-auto max-h-[750px] w-full object-contain transition duration-700 group-hover:scale-[1.01]"
            />

            {/* Gradient */}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#062033]/40 via-transparent to-transparent opacity-60" />

            {/* Top label */}

            <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full border border-white/20 bg-[#062033]/80 px-4 py-2.5 backdrop-blur-md sm:left-7 sm:top-7">
              <FiMap
                size={14}
                className="text-[#D9B77A]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                Project Masterplan
              </span>
            </div>

            {/* Fullscreen button */}

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="View masterplan"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#062033]/80 text-white backdrop-blur-md transition duration-300 hover:bg-[#D9B77A] hover:text-[#062033] sm:right-7 sm:top-7"
            >
              <FiMaximize2 size={17} />
            </button>

          </div>
        </motion.div>

        {/* ================= DETAILS ================= */}

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1fr]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[1.5rem] bg-[#062033] p-7 text-white sm:p-9 lg:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B77A]">
              The Layout
            </p>

            <h3 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Every space has
              <br />

              <span className="text-white/40">
                a purpose.
              </span>
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">
              A thoughtfully planned layout brings together
              accessibility, residential spaces and a
              comfortable environment for your future.
            </p>

            <button
              onClick={() => setIsOpen(true)}
              className="group mt-8 flex items-center gap-3 rounded-full border border-white/15 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:border-[#D9B77A] hover:text-[#D9B77A]"
            >
              View Full Masterplan

              <FiMaximize2
                size={14}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </button>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[1.5rem] border border-[#062033]/10 bg-white p-7 sm:p-9 lg:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0b5d83]">
              Highlights
            </p>

            <div className="mt-7 space-y-5">
              {highlights.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 border-b border-[#062033]/10 pb-5 last:border-0 last:pb-0"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0b5d83]/10 text-[#0b5d83]">
                    <FiCheckCircle size={15} />
                  </span>

                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#062033]/25">
                      0{index + 1}
                    </span>

                    <p className="mt-1 text-sm leading-6 text-[#526774]">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-col gap-5 border-t border-[#062033]/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0b5d83]">
              Interested in a plot?
            </p>

            <p className="mt-2 text-sm text-[#526774]">
              Enquire now for availability and site visit details.
            </p>
          </div>

          <button
            onClick={scrollToContact}
            className="group flex items-center justify-center gap-3 rounded-full bg-[#062033] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#0b5d83]"
          >
            Book a Site Visit

            <FiArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </div>

      {/* ================= LIGHTBOX ================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020b12]/95 p-4 backdrop-blur-md sm:p-8"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close masterplan"
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#D9B77A] hover:text-[#062033] sm:right-8 sm:top-8"
            >
              <FiX size={20} />
            </button>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] max-w-[95vw] overflow-auto rounded-xl bg-white p-2 sm:p-4"
            >
              <img
                src={masterplanImage}
                alt="Blue Spot 3.0 full masterplan"
                className="max-h-[88vh] max-w-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Masterplan;