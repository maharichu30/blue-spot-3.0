import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiTrendingUp,
} from "react-icons/fi";

const EmiCalculator = () => {
  const [plotSize, setPlotSize] = useState(800);
  const [pricePerSqft, setPricePerSqft] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [tenure, setTenure] = useState(10);

  const calculateEMI = () => {
    const price = Number(pricePerSqft);
    const down = Number(downPayment);

    if (!price || price <= 0) {
      return 0;
    }

    const totalAmount = plotSize * price;
    const loanAmount = Math.max(totalAmount - (down || 0), 0);

    if (loanAmount === 0) {
      return 0;
    }

    /*
      Placeholder calculation.

      We are using 0% interest here only as a temporary
      UI calculation until the client's actual EMI terms
      are confirmed.
    */

    return loanAmount / (tenure * 12);
  };

  const emi = calculateEMI();

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const formatCurrency = (amount) => {
    if (!amount) return "₹ —";

    return `₹ ${Math.round(amount).toLocaleString("en-IN")}`;
  };

  return (
    <section
      id="investment"
      className="relative overflow-hidden bg-[#062033] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0b5d83]/20 blur-3xl" />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#D9B77A]" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9B77A]">
              Investment
            </span>
          </div>

          <h2 className="font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-8xl">
            Own land.
            <br />

            <span className="text-white/40">
              Build your future.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            A well-chosen plot can become a place to build your
            dream home, hold for the future or create a long-term
            asset for your family.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="mt-16 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT — INVESTMENT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-7 sm:p-9 lg:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D9B77A]/30 bg-[#D9B77A]/10 text-[#D9B77A]">
              <FiTrendingUp size={20} />
            </div>

            <h3 className="mt-8 font-serif text-3xl sm:text-4xl">
              Why consider a plot?
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/50">
              Land gives you something tangible — a space that
              can evolve with your plans and become part of your
              family's future.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-5 border-t border-white/10 pt-7">

              {[
                "Own a tangible real-estate asset",
                "Create a future home of your own",
                "Choose a plot based on your plans",
                "Explore flexible payment possibilities",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D9B77A]/10 text-[#D9B77A]">
                    <FiCheck size={12} />
                  </div>

                  <p className="text-sm text-white/65">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className="group mt-9 flex items-center gap-2 text-sm font-semibold text-[#D9B77A]"
            >
              Speak with a property advisor

              <FiArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>
          </motion.div>

          {/* RIGHT — EMI CALCULATOR */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[1.5rem] bg-[#f7f5ef] p-7 text-[#062033] sm:p-9 lg:p-10"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0b5d83]">
                  EMI Planner
                </p>

                <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
                  Plan your investment
                </h3>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#062033] text-[#D9B77A]">
                ₹
              </div>
            </div>

            {/* Plot Size */}
            <div className="mt-9">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526774]">
                Plot Size
              </label>

              <select
                value={plotSize}
                onChange={(e) =>
                  setPlotSize(Number(e.target.value))
                }
                className="mt-2 h-12 w-full rounded-xl border border-[#062033]/10 bg-white px-4 text-sm outline-none transition focus:border-[#0b5d83]"
              >
                <option value={800}>800 Sq.Ft</option>
                <option value={1000}>1000 Sq.Ft</option>
                <option value={1200}>1200 Sq.Ft</option>
                <option value={1500}>1500 Sq.Ft</option>
              </select>
            </div>

            {/* Price */}
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526774]">
                Price / Sq.Ft
              </label>

              <input
                type="number"
                value={pricePerSqft}
                onChange={(e) =>
                  setPricePerSqft(e.target.value)
                }
                placeholder="Enter official project price"
                className="mt-2 h-12 w-full rounded-xl border border-[#062033]/10 bg-white px-4 text-sm outline-none transition placeholder:text-[#062033]/30 focus:border-[#0b5d83]"
              />
            </div>

            {/* Down Payment */}
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526774]">
                Down Payment
              </label>

              <input
                type="number"
                value={downPayment}
                onChange={(e) =>
                  setDownPayment(e.target.value)
                }
                placeholder="Optional"
                className="mt-2 h-12 w-full rounded-xl border border-[#062033]/10 bg-white px-4 text-sm outline-none transition placeholder:text-[#062033]/30 focus:border-[#0b5d83]"
              />
            </div>

            {/* Tenure */}
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526774]">
                Tenure
              </label>

              <select
                value={tenure}
                onChange={(e) =>
                  setTenure(Number(e.target.value))
                }
                className="mt-2 h-12 w-full rounded-xl border border-[#062033]/10 bg-white px-4 text-sm outline-none transition focus:border-[#0b5d83]"
              >
                <option value={5}>5 Years</option>
                <option value={10}>10 Years</option>
                <option value={15}>15 Years</option>
                <option value={20}>20 Years</option>
              </select>
            </div>

            {/* EMI Result */}
            <div className="mt-7 rounded-2xl bg-[#062033] p-6 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                Estimated Monthly Amount
              </p>

              <p className="mt-2 font-serif text-4xl text-[#D9B77A] sm:text-5xl">
                {formatCurrency(emi)}
              </p>

              <p className="mt-3 text-xs leading-5 text-white/40">
                This is a planning estimate only. Final EMI depends
                on the approved payment structure, financing terms,
                interest rate and eligibility.
              </p>
            </div>

            <button
              onClick={scrollToContact}
              className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0b5d83] text-sm font-semibold text-white transition hover:bg-[#062033]"
            >
              Get Exact EMI Details

              <FiArrowUpRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* DISCLAIMER */}
        <p className="mt-6 text-xs leading-5 text-white/25">
          EMI calculator is a preliminary planning tool. Final
          pricing, payment schedule, interest rate, tenure and
          financing availability are subject to the project's
          official terms and applicable lender conditions.
        </p>
      </div>
    </section>
  );
};

export default EmiCalculator;