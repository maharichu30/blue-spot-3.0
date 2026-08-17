import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiMapPin,
} from "react-icons/fi";

import HeroEnquiryForm from "./HeroEnquiryForm";

import hero1 from "../assets/images/beach_coast1.png";
import hero2 from "../assets/images/beach_coast2.jpg";
import hero3 from "../assets/images/lifestyle_sunset.jpg";
import hero4 from "../assets/images/villa_exterior.png";

const slides = [
  {
    image: hero1,
    eyebrow: "MANJU GROUPS PRESENTS",
    title: "BLUESPOT 3.0",
    subtitle: "NEW BESANT NAGAR",
    description:
      "A new coastal address taking shape along the iconic ECR corridor.",
  },
  {
    image: hero2,
    eyebrow: "LIVE BY THE COAST",
    title: "YOUR PLACE",
    subtitle: "YOUR COAST",
    description:
      "Experience the charm of coastal living with your own piece of ECR.",
  },
  {
    image: hero3,
    eyebrow: "A NEW ADDRESS",
    title: "OWN YOUR",
    subtitle: "PLACE ON ECR",
    description:
      "Thoughtfully planned residential plots designed for your future.",
  },
  {
    image: hero4,
    eyebrow: "INVEST IN TOMORROW",
    title: "THE NEXT",
    subtitle: "COASTAL ADDRESS",
    description:
      "Choose your plot and take the first step towards your future.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ================= AUTO SLIDER =================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  // ================= SCROLL TO PLOTS =================

  const scrollToProjects = () => {
    const section = document.getElementById("plots");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // ================= SCROLL TO CONTACT =================

  const scrollToContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="overview"
      className="relative min-h-screen overflow-hidden bg-[#071A2B]"
    >
      {/* =====================================================
          BACKGROUND IMAGE SLIDES
      ====================================================== */}

      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1,
          }}
          className="absolute inset-0"
        >
          {/* IMAGE */}

          <motion.img
            src={slide.image}
            alt={`Bluespot 3.0 - ${slide.subtitle}`}
            initial={{
              scale: 1.08,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 5,
              ease: "linear",
            }}
            className="h-full w-full object-cover"
          />

          {/* DARK OVERLAY */}

          <div className="absolute inset-0 bg-[#071A2B]/45" />

          {/* LEFT DARK GRADIENT */}

          <div className="absolute inset-0 bg-gradient-to-r from-[#071A2B]/95 via-[#071A2B]/60 to-transparent" />

          {/* BOTTOM GRADIENT */}

          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#071A2B] to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-end px-5 pb-10 pt-28 sm:px-8 lg:px-12 lg:pb-14">
        <div className="grid w-full items-end gap-10 lg:grid-cols-[1fr_390px] xl:grid-cols-[1fr_420px]">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="max-w-3xl pb-4">

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.7,
                }}
              >

                {/* EYEBROW */}

                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D9B77A]" />

                  <span className="text-xs font-medium tracking-[0.3em] text-[#D9B77A]">
                    {slide.eyebrow}
                  </span>
                </div>

                {/* MAIN TITLE */}

                <h1 className="font-serif text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                  {slide.title}
                </h1>

                {/* SUBTITLE */}

                <h2 className="mt-3 text-2xl font-light tracking-wide text-white sm:text-3xl md:text-4xl">
                  {slide.subtitle}
                </h2>

                {/* DESCRIPTION */}

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                  {slide.description}
                </p>

                {/* LOCATION */}

                <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
                  <FiMapPin
                    className="text-[#D9B77A]"
                    size={16}
                  />

                  <span>
                    ECR • Between Mahabalipuram & Pondicherry
                  </span>
                </div>

                {/* PRICE */}

                <div className="mt-6 flex flex-wrap items-center gap-3">

                  <div className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-md">
                    <span className="text-xs text-white/50">
                      Starting from
                    </span>

                    <span className="ml-2 text-sm font-semibold text-[#D9B77A]">
                      ₹2,250 / Sq.Ft
                    </span>
                  </div>

                  <div className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-md">
                    <span className="text-sm font-medium text-white">
                      800 Sq.Ft onwards
                    </span>
                  </div>

                </div>

                {/* CTA BUTTONS */}

                <div className="mt-7 flex flex-wrap gap-3">

                  {/* EXPLORE */}

                  <button
                    type="button"
                    onClick={scrollToProjects}
                    className="group flex items-center gap-2 rounded-full bg-[#D9B77A] px-6 py-3 text-sm font-semibold text-[#071A2B] transition duration-300 hover:bg-white"
                  >
                    Explore Plots

                    <FiArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </button>

                  {/* SITE VISIT */}

                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-[#071A2B]"
                  >
                    Book a Site Visit
                  </button>

                </div>

              </motion.div>
            </AnimatePresence>

            {/* =================================================
                SLIDE INDICATORS
            ================================================== */}

            <div className="mt-10 flex items-center gap-4">

              {/* CURRENT NUMBER */}

              <span className="text-xs text-white/40">
                0{currentSlide + 1}
              </span>

              {/* DOT / LINE INDICATORS */}

              <div className="flex items-center gap-2">

                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    className="group h-6"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <span
                      className={`block h-[2px] transition-all duration-500 ${
                        currentSlide === index
                          ? "w-12 bg-[#D9B77A]"
                          : "w-5 bg-white/30 group-hover:bg-white/60"
                      }`}
                    />
                  </button>
                ))}

              </div>

              {/* TOTAL */}

              <span className="text-xs text-white/40">
                04
              </span>

            </div>

          </div>

          {/* =================================================
              HERO ENQUIRY FORM
          ================================================== */}

          <div className="flex justify-center lg:justify-end">

            <HeroEnquiryForm />

          </div>

        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 text-xs tracking-widest text-white/50 lg:flex"
      >
        <FiArrowDown size={14} />

        SCROLL
      </motion.div>

    </section>
  );
};

export default Hero;