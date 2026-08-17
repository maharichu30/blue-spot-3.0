import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiPhone,
  FiArrowUpRight,
} from "react-icons/fi";

import manjuLogo from "../assets/images/manju_group.png";

const navLinks = [
  { name: "Overview", id: "overview" },
  { name: "Location", id: "location" },
  { name: "Plots", id: "plots" },
  { name: "Amenities", id: "amenities" },
  { name: "Gallery", id: "gallery" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-[#071A2B]/95 shadow-lg backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[78px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* ================= LOGO ================= */}

          <button
            onClick={() => scrollToSection("overview")}
            className="flex items-center"
            aria-label="Go to homepage"
          >
            <img
              src={manjuLogo}
              alt="Manju Groups"
              className="h-12 w-auto object-contain sm:h-14"
            />
          </button>

          {/* ================= DESKTOP NAV ================= */}

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="group relative text-[13px] font-medium tracking-wide text-white/80 transition hover:text-white"
              >
                {link.name}

                <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#D9B77A] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* ================= RIGHT SIDE ================= */}

          <div className="hidden items-center gap-4 lg:flex">

            {/* PHONE */}

            <a
              href="tel:+919600033336"
              className="flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
            >
              <FiPhone size={15} />

              <span>96000 33336</span>
            </a>

            {/* ENQUIRE */}

            <button
              onClick={() => scrollToSection("contact")}
              className="group flex items-center gap-2 rounded-full bg-[#D9B77A] px-5 py-2.5 text-xs font-semibold tracking-wide text-[#071A2B] transition-all duration-300 hover:bg-white"
            >
              Enquire Now

              <FiArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>

          {/* ================= MOBILE BUTTON ================= */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <FiX size={22} />
            ) : (
              <FiMenu size={22} />
            )}
          </button>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
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
              duration: 0.3,
            }}
            className="fixed inset-x-0 top-[78px] z-40 border-t border-white/10 bg-[#071A2B]/98 px-6 py-6 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col">

              {/* MOBILE NAV LINKS */}

              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  onClick={() => scrollToSection(link.id)}
                  className="border-b border-white/10 py-4 text-left text-sm text-white/80 transition hover:text-[#D9B77A]"
                >
                  {link.name}
                </motion.button>
              ))}

              {/* MOBILE ENQUIRE */}

              <button
                onClick={() => scrollToSection("contact")}
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#D9B77A] px-5 py-3 text-sm font-semibold text-[#071A2B]"
              >
                Enquire Now

                <FiArrowUpRight size={16} />
              </button>

              {/* MOBILE PHONE */}

              <a
                href="tel:+919600033336"
                className="mt-4 flex items-center justify-center gap-2 py-3 text-sm text-white/80"
              >
                <FiPhone size={16} />

                96000 33336
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;