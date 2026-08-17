import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiMaximize2,
} from "react-icons/fi";

const plotOptions = [
  {
    size: "800",
    unit: "SQ.FT",
    title: "Smart Start",
    description:
      "A practical plot size for creating your own future home.",
    featured: false,
  },
  {
    size: "1000",
    unit: "SQ.FT",
    title: "Perfect Balance",
    description:
      "More space to shape a comfortable home and lifestyle.",
    featured: true,
  },
  {
    size: "1200+",
    unit: "SQ.FT",
    title: "Future Ready",
    description:
      "More space for larger plans and long-term possibilities.",
    featured: false,
  },
];

const PlotOptions = () => {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="plots"
      className="relative overflow-hidden bg-[#f7f5ef] py-16 text-[#062033] sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          {/* LEFT SMALL TITLE */}

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#0b5d83]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0b5d83]">
                Plot Options
              </span>
            </div>

            <p className="text-xs uppercase tracking-[0.2em] text-[#062033]/40">
              Bluespot 3.0
            </p>
          </div>

          {/* MAIN HEADING */}

          <div>
            <h2 className="font-serif text-4xl leading-[1] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              Land that fits
              <br />

              <span className="italic text-[#0b5d83]">
                your future.
              </span>
            </h2>
          </div>
        </motion.div>

        {/* ================= PLOT CARDS ================= */}

        <div className="mt-10 grid gap-4 lg:grid-cols-3">

          {plotOptions.map((plot, index) => (
            <motion.div
              key={plot.size}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className={`group relative overflow-hidden rounded-[1.5rem] border p-7 transition-all duration-500 sm:p-9 ${
                plot.featured
                  ? "border-[#0b5d83] bg-[#062033] text-white lg:-translate-y-3"
                  : "border-[#062033]/10 bg-white hover:-translate-y-2 hover:shadow-xl"
              }`}
            >

              {/* ================= FEATURED BADGE ================= */}

              {plot.featured && (
                <div className="absolute right-6 top-6 rounded-full bg-[#D9B77A] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#062033]">
                  Popular
                </div>
              )}

              {/* ================= ICON ================= */}

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full border ${
                  plot.featured
                    ? "border-white/20 bg-white/10 text-[#D9B77A]"
                    : "border-[#062033]/10 bg-[#f7f5ef] text-[#0b5d83]"
                }`}
              >
                <FiMaximize2 size={19} />
              </div>

              {/* ================= PLOT SIZE ================= */}

              <div className="mt-10">
                <p
                  className={`text-xs uppercase tracking-[0.25em] ${
                    plot.featured
                      ? "text-white/40"
                      : "text-[#062033]/40"
                  }`}
                >
                  Plot Size
                </p>

                <div className="mt-2 flex items-end gap-2">

                  <h3 className="font-serif text-5xl sm:text-6xl">
                    {plot.size}
                  </h3>

                  <span
                    className={`mb-2 text-sm ${
                      plot.featured
                        ? "text-white/50"
                        : "text-[#062033]/50"
                    }`}
                  >
                    {plot.unit}
                  </span>

                </div>
              </div>

              {/* ================= TITLE ================= */}

              <h4 className="mt-7 text-xl font-semibold">
                {plot.title}
              </h4>

              {/* ================= DESCRIPTION ================= */}

              <p
                className={`mt-3 min-h-[72px] text-sm leading-6 ${
                  plot.featured
                    ? "text-white/55"
                    : "text-[#526774]"
                }`}
              >
                {plot.description}
              </p>

              {/* ================= FEATURES ================= */}

              <div className="mt-7 space-y-3 border-t border-current/10 pt-6">

                <div className="flex items-center gap-3 text-sm">
                  <FiCheck
                    size={15}
                    className={
                      plot.featured
                        ? "text-[#D9B77A]"
                        : "text-[#0b5d83]"
                    }
                  />

                  <span>Residential plot</span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <FiCheck
                    size={15}
                    className={
                      plot.featured
                        ? "text-[#D9B77A]"
                        : "text-[#0b5d83]"
                    }
                  />

                  <span>Planned development</span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <FiCheck
                    size={15}
                    className={
                      plot.featured
                        ? "text-[#D9B77A]"
                        : "text-[#0b5d83]"
                    }
                  />

                  <span>Site visit assistance</span>
                </div>

              </div>

              {/* ================= CTA ================= */}

              <button
                onClick={scrollToContact}
                className={`group mt-8 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                  plot.featured
                    ? "bg-[#D9B77A] text-[#062033] hover:bg-white"
                    : "bg-[#062033] text-white hover:bg-[#0b5d83]"
                }`}
              >
                Enquire for this plot

                <FiArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

              {/* ================= HOVER LINE ================= */}

              <span
                className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full ${
                  plot.featured
                    ? "bg-[#D9B77A]"
                    : "bg-[#0b5d83]"
                }`}
              />

            </motion.div>
          ))}

        </div>

        {/* ================= PAYMENT BANNER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-5 overflow-hidden rounded-[1.5rem] bg-[#062033] text-white"
        >
          <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9B77A]">
                Flexible Payment
              </p>

              <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
                Make your dream plot easier to own.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/50">
                Ask our property advisors about the available
                payment and EMI options for Bluespot 3.0.
              </p>

            </div>

            <button
              onClick={scrollToContact}
              className="flex items-center justify-center gap-2 rounded-full bg-[#D9B77A] px-6 py-3 text-sm font-semibold text-[#062033] transition hover:bg-white"
            >
              Check EMI Options

              <FiArrowUpRight size={16} />
            </button>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PlotOptions;