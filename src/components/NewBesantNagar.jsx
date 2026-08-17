import { motion } from "framer-motion";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

import coastalImage from "../assets/images/lifestyle_sunset.jpg";
import coastalVideo from "../assets/videos/Hero_beachdrone.mp4";

const NewBesantNagar = () => {
  return (
    <section
      id="new-besant-nagar"
      className="relative overflow-hidden bg-[#F5F0E7] text-[#071A2B]"
    >

      {/* =====================================================
          TOP INTRO
      ====================================================== */}

      <div className="mx-auto max-w-[1500px] px-5 pb-12 pt-16 sm:px-8 sm:pb-14 sm:pt-20 lg:px-12 lg:pb-16 lg:pt-20">

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.8,
          }}
          className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"
        >

          {/* SMALL TITLE */}

          <div>

            <div className="mb-4 flex items-center gap-3">

              <span className="h-px w-10 bg-[#B58A45]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B58A45]">
                The Bluespot Story
              </span>

            </div>

            <p className="text-xs font-medium tracking-[0.2em] text-[#071A2B]/50">
              ECR • COAST • LIFESTYLE
            </p>

          </div>


          {/* MAIN HEADING */}

          <div>

            <h2 className="font-serif text-4xl leading-[1] tracking-[-0.02em] sm:text-5xl lg:text-6xl">

              A new coastal{" "}

              <span className="text-[#B58A45]">
                destination.
              </span>

            </h2>

          </div>

        </motion.div>

      </div>


      {/* =====================================================
          VIDEO + CONTENT
      ====================================================== */}

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        <div className="relative min-h-[560px] overflow-hidden rounded-2xl sm:min-h-[620px] lg:min-h-[680px]">


          {/* =================================================
              FALLBACK IMAGE
          ================================================= */}

          <img
            src={coastalImage}
            alt="Bluespot 3.0 coastal lifestyle"
            className="absolute inset-0 h-full w-full object-cover"
          />


          {/* =================================================
              BACKGROUND VIDEO
          ================================================= */}

          <video
            autoPlay
            muted
            loop
            playsInline
            poster={coastalImage}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source
              src={coastalVideo}
              type="video/mp4"
            />

            Your browser does not support the video tag.
          </video>


          {/* =================================================
              DARK OVERLAY
          ================================================= */}

          <div className="absolute inset-0 bg-[#071A2B]/35" />


          {/* LEFT GRADIENT */}

          <div className="absolute inset-0 bg-gradient-to-r from-[#071A2B]/85 via-[#071A2B]/40 to-transparent" />


          {/* BOTTOM GRADIENT */}

          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#071A2B]/85 to-transparent" />


          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="relative flex min-h-[560px] items-end p-6 sm:min-h-[620px] sm:p-10 lg:min-h-[680px] lg:p-14">

            <div className="max-w-2xl text-white">


              {/* LOCATION */}

              <motion.div
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
                }}
                transition={{
                  duration: 0.6,
                }}
                className="mb-5 flex items-center gap-2"
              >

                <FiMapPin
                  size={15}
                  className="text-[#D9B77A]"
                />

                <span className="text-[11px] uppercase tracking-[0.25em] text-white/70">
                  Along the ECR corridor
                </span>

              </motion.div>


              {/* =================================================
                  BIG TEXT
              ================================================= */}

              <motion.h3
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                }}
                className="font-serif text-4xl leading-[0.95] tracking-[-0.02em] sm:text-5xl md:text-6xl lg:text-7xl"
              >

                NEW

                <br />

                <span className="text-[#D9B77A]">
                  BESANT NAGAR.
                </span>

              </motion.h3>


              {/* DESCRIPTION */}

              <motion.p
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
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                }}
                className="mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base"
              >
                A destination inspired by the charm of coastal
                living — bringing together open spaces, lifestyle,
                connectivity and the freedom to create a place
                of your own.
              </motion.p>


              {/* CTA */}

              <motion.button
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
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                }}
                onClick={() =>
                  document
                    .getElementById("location")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="group mt-7 flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#071A2B]"
              >

                Discover the Location

                <FiArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />

              </motion.button>

            </div>


            {/* =================================================
                SIDE NUMBER
            ================================================= */}

            <div className="absolute bottom-7 right-7 hidden text-right lg:block">

              <p className="font-serif text-5xl text-white/20">
                03
              </p>

              <p className="mt-1 text-[9px] tracking-[0.3em] text-white/40">
                BLUESPOT 3.0
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM STATEMENT
      ====================================================== */}

      <div className="mx-auto max-w-[1500px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="grid gap-6 lg:grid-cols-2 lg:gap-12"
        >

          {/* HEADING */}

          <h3 className="font-serif text-3xl leading-tight sm:text-4xl">

            Not just a plot.

            <br />

            <span className="text-[#B58A45]">
              A place to belong.
            </span>

          </h3>


          {/* DESCRIPTION */}

          <div className="flex items-end">

            <p className="max-w-lg text-sm leading-7 text-[#071A2B]/60 sm:text-base">

              Bluespot 3.0 is designed around a simple idea:
              your land should be more than an investment.
              It should be a place where your future can take
              shape.

            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default NewBesantNagar;