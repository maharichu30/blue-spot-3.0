import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiAward,
  FiHome,
} from "react-icons/fi";

// Image
import actualPlot from "../assets/images/actual_plot.png";

const highlights = [
  {
    icon: FiAward,
    value: "Trusted",
    label: "Real Estate Brand",
  },
  {
    icon: FiHome,
    value: "Multiple",
    label: "Developments",
  },
  {
    icon: FiCheck,
    value: "Focused",
    label: "On Customer Trust",
  },
];

const ManjuGroup = () => {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      id="manju-group"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        text-[#062033]
        sm:py-28
        lg:py-32
      "
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            grid
            gap-8
            lg:grid-cols-[0.7fr_1.3fr]
            lg:items-end
          "
        >

          <div>

            <div
              className="
                mb-5
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-px
                  w-10
                  bg-[#0b5d83]
                "
              />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#0b5d83]
                "
              >
                The Developer
              </span>
            </div>

            <p
              className="
                text-sm
                uppercase
                tracking-[0.2em]
                text-[#062033]/35
              "
            >
              Manju Groups
            </p>

          </div>


          <h2
            className="
              font-serif
              text-5xl
              leading-[0.95]
              sm:text-6xl
              lg:text-8xl
            "
          >
            Building spaces.

            <br />

            <span
              className="
                italic
                text-[#0b5d83]
              "
            >
              Creating possibilities.
            </span>
          </h2>

        </motion.div>


        {/* ================= MAIN CONTENT ================= */}

        <div
          className="
            mt-16
            grid
            gap-5
            lg:grid-cols-[1fr_1fr]
          "
        >

          {/* ==================================================
              LEFT IMAGE
              SCROLLS FROM LEFT → RIGHT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -180,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              relative
              min-h-[500px]
              overflow-hidden
              rounded-[1.5rem]
              bg-[#e7e4dc]
              sm:min-h-[600px]
            "
          >

            {/* IMAGE */}

            <motion.img
              src={actualPlot}
              alt="Manju Groups property"
              loading="lazy"
              initial={{
                scale: 1.12,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />


            {/* OVERLAY */}

            <motion.div
              initial={{
                opacity: 0.95,
              }}
              whileInView={{
                opacity: 1,
              }}
              whileHover={{
                opacity: 0.75,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#062033]/80
                via-transparent
                to-transparent
              "
            />


            {/* GOLD LIGHT EFFECT */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-[#D9B77A]/10
                via-transparent
                to-transparent
                opacity-0
                transition-opacity
                duration-700
                group-hover:opacity-100
              "
            />


            {/* IMAGE CONTENT */}

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
                delay: 0.65,
                duration: 0.7,
              }}
              className="
                absolute
                bottom-7
                left-7
                sm:bottom-9
                sm:left-9
              "
            >

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#D9B77A]
                "
              >
                Manju Groups
              </p>

              <h3
                className="
                  mt-2
                  font-serif
                  text-4xl
                  text-white
                  sm:text-5xl
                "
              >
                A name behind
                <br />
                the vision.
              </h3>

            </motion.div>

          </motion.div>


          {/* ================= CONTENT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              flex-col
              justify-between
              rounded-[1.5rem]
              bg-[#f7f5ef]
              p-7
              sm:p-10
              lg:p-12
            "
          >

            <div>

              <p
                className="
                  max-w-xl
                  text-base
                  leading-8
                  text-[#526774]
                  sm:text-lg
                "
              >
                Manju Groups brings its real-estate vision to
                Bluespot 3.0 — creating a destination where
                location, lifestyle and future possibilities
                come together.
              </p>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-sm
                  leading-7
                  text-[#61737e]
                "
              >
                With a focus on developing meaningful spaces,
                the group aims to create properties that offer
                both a place to belong and an opportunity to
                invest in the future.
              </p>


              {/* POINTS */}

              <div
                className="
                  mt-9
                  space-y-4
                  border-t
                  border-[#062033]/10
                  pt-8
                "
              >

                {[
                  "Customer-focused approach",
                  "Strategic property development",
                  "Long-term value perspective",
                ].map((item, index) => (

                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                    }}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >

                    <span
                      className="
                        flex
                        h-6
                        w-6
                        items-center
                        justify-center
                        rounded-full
                        bg-[#0b5d83]/10
                        text-[#0b5d83]
                      "
                    >
                      <FiCheck size={12} />
                    </span>

                    <span
                      className="
                        text-sm
                        text-[#526774]
                      "
                    >
                      {item}
                    </span>

                  </motion.div>

                ))}

              </div>

            </div>


            {/* CTA */}

            <button
              onClick={scrollToContact}
              className="
                group
                mt-10
                flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-[#062033]
                px-6
                py-4
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#0b5d83]
              "
            >

              Know More About Manju Groups

              <FiArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />

            </button>

          </motion.div>

        </div>


        {/* ================= HIGHLIGHTS ================= */}

        <div
          className="
            mt-5
            grid
            gap-4
            sm:grid-cols-3
          "
        >

          {highlights.map(
            (item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    rounded-[1.25rem]
                    border
                    border-[#062033]/10
                    bg-white
                    p-6
                    transition-shadow
                    duration-300
                    hover:shadow-xl
                    sm:p-7
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <Icon
                      size={20}
                      className="text-[#0b5d83]"
                    />

                    <span
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#062033]/25
                      "
                    >
                      0{index + 1}
                    </span>

                  </div>


                  <p
                    className="
                      mt-7
                      font-serif
                      text-2xl
                      text-[#062033]
                    "
                  >
                    {item.value}
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      uppercase
                      tracking-[0.15em]
                      text-[#61737e]
                    "
                  >
                    {item.label}
                  </p>

                </motion.div>
              );
            }
          )}

        </div>


        {/* ================= QUOTE ================= */}

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
            duration: 1,
          }}
          className="
            mt-16
            border-t
            border-[#062033]/10
            pt-10
            text-center
          "
        >

          <p
            className="
              mx-auto
              max-w-4xl
              font-serif
              text-3xl
              leading-tight
              text-[#062033]
              sm:text-4xl
              lg:text-5xl
            "
          >
            "A property is not just where you live.

            <span
              className="
                italic
                text-[#0b5d83]
              "
            >
              {" "}It's what you build your future on.
            </span>"

          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default ManjuGroup;