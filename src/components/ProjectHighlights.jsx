import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";

import { useEffect, useRef } from "react";

import {
  FiMaximize2,
  FiMapPin,
  FiTrendingUp,
  FiArrowUpRight,
} from "react-icons/fi";


// ======================================================
// PROJECT HIGHLIGHT DATA
// ======================================================

const highlights = [
  {
    icon: FiMaximize2,
    value: 800,
    prefix: "",
    suffix: "+",
    label: "SQ.FT PLOTS",
    description: "Choose a plot that fits your vision.",
    count: true,
  },

  {
    icon: FiTrendingUp,
    value: 2250,
    prefix: "₹",
    suffix: "",
    label: "PER SQ.FT ONWARDS",
    description: "An attractive starting price for your future.",
    count: true,
  },

  {
    icon: FiMapPin,
    value: "ECR",
    label: "COASTAL LOCATION",
    description: "A new address along the ECR corridor.",
    count: false,
  },

  {
    icon: FiArrowUpRight,
    value: "60' / 40' / 33'",
    label: "WIDE ROADS",
    description: "Planned infrastructure for comfortable access.",
    count: false,
  },
];


// ======================================================
// COUNT UP NUMBER
// ======================================================

const CountUpNumber = ({
  value,
  prefix = "",
  suffix = "",
}) => {
  const count = useMotionValue(0);

  const spring = useSpring(count, {
    stiffness: 80,
    damping: 20,
    mass: 1,
  });

  const rounded = useTransform(
    spring,
    (latest) => Math.round(latest)
  );

  const ref = useRef(null);

  // Animation starts when this number becomes visible
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, count, value]);

  return (
    <span ref={ref}>
      {prefix}

      <motion.span>
        {rounded}
      </motion.span>

      {suffix}
    </span>
  );
};


// ======================================================
// PROJECT HIGHLIGHTS
// ======================================================

const ProjectHighlights = () => {
  return (
    <section
      id="highlights"
      className="relative overflow-hidden bg-[#071A2B] py-24 sm:py-28 lg:py-32"
    >

      {/* ================================================
          BACKGROUND DECORATION
      ================================================= */}

      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#D9B77A]/5 blur-3xl" />


      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">


        {/* ================================================
            SECTION HEADING
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
            amount: 0.3,
          }}

          transition={{
            duration: 0.7,
          }}

          className="mb-16 max-w-2xl"
        >

          {/* Small heading */}

          <div className="mb-5 flex items-center gap-3">

            <span className="h-px w-10 bg-[#D9B77A]" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#D9B77A]">
              Bluespot 3.0
            </span>

          </div>


          {/* Main heading */}

          <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">

            A new address.

            <br />

            <span className="text-white/50">
              A smarter investment.
            </span>

          </h2>


          {/* Description */}

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Everything you need to know about Bluespot 3.0,
            at a glance. Discover a thoughtfully planned plotted
            development designed for modern coastal living.
          </p>

        </motion.div>



        {/* ================================================
            HIGHLIGHT CARDS
        ================================================= */}

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">

          {highlights.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                  amount: 0.2,
                }}

                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}

                className="group relative bg-[#071A2B] p-7 transition-colors duration-500 hover:bg-[#0B2539] sm:p-8 lg:p-9"
              >


                {/* =========================================
                    ICON + CARD NUMBER
                ========================================= */}

                <div className="mb-10 flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#D9B77A] transition-all duration-500 group-hover:border-[#D9B77A]/40 group-hover:bg-[#D9B77A]/10">

                    <Icon size={19} />

                  </div>


                  <span className="text-xs text-white/20">
                    0{index + 1}
                  </span>

                </div>



                {/* =========================================
                    VALUE / COUNT
                ========================================= */}

                <h3 className="font-serif text-3xl text-white sm:text-4xl">

                  {item.count ? (
                    <CountUpNumber
                      value={item.value}
                      prefix={item.prefix}
                      suffix={item.suffix}
                    />
                  ) : (
                    item.value
                  )}

                </h3>



                {/* =========================================
                    LABEL
                ========================================= */}

                <p className="mt-2 text-xs font-semibold tracking-[0.18em] text-[#D9B77A]">
                  {item.label}
                </p>



                {/* =========================================
                    DESCRIPTION
                ========================================= */}

                <p className="mt-4 text-sm leading-6 text-white/50">
                  {item.description}
                </p>



                {/* =========================================
                    HOVER LINE
                ========================================= */}

                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D9B77A] transition-all duration-500 group-hover:w-full" />

              </motion.div>
            );
          })}

        </div>



        {/* ================================================
            BOTTOM STATEMENT
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}

          whileInView={{
            opacity: 1,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.8,
            delay: 0.2,
          }}

          className="mt-12 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
        >


          {/* Statement */}

          <p className="max-w-2xl text-sm leading-6 text-white/50">

            <span className="text-white/80">
              Own your piece of the coast.
            </span>{" "}

            Experience the potential of a new destination on ECR.

          </p>



          {/* Explore button */}

          <button
            onClick={() =>
              document
                .getElementById("plots")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }

            className="group flex w-fit items-center gap-2 text-sm font-medium text-[#D9B77A]"
          >

            Explore Plot Options

            <FiArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />

          </button>

        </motion.div>

      </div>

    </section>
  );
};

export default ProjectHighlights;