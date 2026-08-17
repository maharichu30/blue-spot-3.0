import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiHome,
  FiMapPin,
  FiShield,
  FiZap,
  FiGrid,
  FiDroplet,
  FiActivity,
  FiNavigation,
} from "react-icons/fi";

// ================= AMENITIES DATA =================

const amenities = [
  {
    image: "/images/prime_location.png",
    icon: FiMapPin,
    number: "01",
    title: "Prime Location",
    description:
      "Strategically positioned along the ECR corridor for a well-connected coastal lifestyle.",
  },
  {
    image: "/images/connectivity.png",
    icon: FiNavigation,
    number: "02",
    title: "Easy Connectivity",
    description:
      "Enjoy convenient access to important destinations and the growing ECR corridor.",
  },
  {
    image: "/images/residential_plot.png",
    icon: FiHome,
    number: "03",
    title: "Residential Plots",
    description:
      "A dedicated space where you can plan and build a home that reflects your lifestyle.",
  },
  {
    image: "/images/planned_developement.png",
    icon: FiGrid,
    number: "04",
    title: "Planned Development",
    description:
      "Thoughtfully planned spaces designed to create a comfortable and organised environment.",
  },
  {
    image: "/images/essential_infrastructure.png",
    icon: FiDroplet,
    number: "05",
    title: "Essential Infrastructure",
    description:
      "Designed with the essential infrastructure needed for a convenient everyday experience.",
  },
  {
    image: "/images/peace.png",
    icon: FiShield,
    number: "06",
    title: "Peace of Mind",
    description:
      "Get property guidance and assistance throughout your plot-buying journey.",
  },
  {
    image: "/images/lifestyle.png",
    icon: FiActivity,
    number: "07",
    title: "Lifestyle Potential",
    description:
      "A coastal setting that offers the opportunity to create your own lifestyle and future.",
  },
  {
    image: "/images/future.png",
    icon: FiZap,
    number: "08",
    title: "Future Ready",
    description:
      "A destination designed with long-term living and investment possibilities in mind.",
  },
];

const Amenities = () => {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="amenities"
      className="relative overflow-hidden bg-[#f7f5ef] py-16 text-[#062033] sm:py-20 lg:py-24"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#0b5d83]/10 blur-3xl" />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"
        >
          {/* LEFT */}

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#0b5d83]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0b5d83]">
                Lifestyle
              </span>
            </div>

            <p className="text-xs uppercase tracking-[0.2em] text-[#062033]/40">
              Bluespot 3.0
            </p>
          </div>

          {/* RIGHT */}

          <div>
            <h2 className="font-serif text-4xl leading-[1] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              Everything you need
              <br />

              <span className="italic text-[#0b5d83]">
                for a better tomorrow.
              </span>
            </h2>
          </div>
        </motion.div>

        {/* ================= INTRO ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-7 max-w-2xl"
        >
          <p className="text-base leading-7 text-[#526774] sm:text-lg">
            Designed around location, connectivity, comfort and
            long-term possibilities — Bluespot 3.0 gives you
            more reasons to look forward to the future.
          </p>
        </motion.div>

        {/* ================= 8 AMENITIES ================= */}

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {amenities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-[#062033]/10 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* ================= IMAGE ================= */}

                <div className="relative h-48 overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* IMAGE OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#062033]/70 via-transparent to-transparent" />

                  {/* NUMBER */}

                  <span className="absolute left-5 top-5 text-xs font-semibold tracking-[0.2em] text-white/80">
                    {item.number}
                  </span>

                  {/* ICON */}

                  <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#062033]/60 text-[#D9B77A] backdrop-blur-md transition-all duration-500 group-hover:bg-[#D9B77A] group-hover:text-[#062033]">
                    <Icon size={18} />
                  </div>

                </div>

                {/* ================= CONTENT ================= */}

                <div className="relative p-6 sm:p-7">

                  <h3 className="font-serif text-2xl text-[#062033] sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#61737e]">
                    {item.description}
                  </p>

                  {/* ARROW */}

                  <div className="mt-6 flex justify-end">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#062033]/10 text-[#0b5d83] transition-all duration-500 group-hover:translate-x-1 group-hover:bg-[#062033] group-hover:text-[#D9B77A]">
                      <FiArrowUpRight size={16} />
                    </div>

                  </div>

                </div>

                {/* BOTTOM HOVER LINE */}

                <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#0b5d83] transition-all duration-500 group-hover:w-full" />

              </motion.div>
            );
          })}

        </div>

        {/* ================= FEATURE BANNER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-5 overflow-hidden rounded-[1.5rem] bg-[#062033]"
        >

          {/* DECORATIVE CIRCLES */}

          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -right-5 -top-5 h-40 w-40 rounded-full border border-[#D9B77A]/20" />

          <div className="relative grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">

            {/* TEXT */}

            <div>

              <div className="mb-4 flex items-center gap-3">

                <span className="h-px w-8 bg-[#D9B77A]" />

                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9B77A]">
                  Your Future Starts Here
                </span>

              </div>

              <h3 className="max-w-3xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                Your space.
                <br />

                <span className="text-white/40">
                  Your plans. Your future.
                </span>
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                Discover Bluespot 3.0 and explore the possibilities
                of owning a plot in a destination shaped around
                coastal living.
              </p>

            </div>

            {/* CTA */}

            <button
              onClick={scrollToContact}
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#D9B77A] px-7 py-4 text-sm font-semibold text-[#062033] transition-all duration-300 hover:bg-white sm:w-auto"
            >
              Enquire Now

              <FiArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>

          </div>
        </motion.div>

        {/* ================= BOTTOM POINTS ================= */}

        <div className="mt-7 grid gap-4 border-t border-[#062033]/10 pt-6 sm:grid-cols-3">

          {[
            "Coastal lifestyle",
            "Strategic ECR location",
            "Future-focused investment",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3"
            >

              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0b5d83]/10 text-[#0b5d83]">
                <FiCheck size={12} />
              </span>

              <span className="text-sm text-[#526774]">
                {item}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Amenities;