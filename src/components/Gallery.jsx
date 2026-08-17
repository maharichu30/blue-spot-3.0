import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiMaximize2,
} from "react-icons/fi";

// Change these image names according to your actual files
import image1 from "../assets/images/beach_coast1.png";
import image2 from "../assets/images/beach_coast2.jpg";
import image3 from "../assets/images/lifestyle_sunset.jpg";
import image4 from "../assets/images/villa_exterior.png";
import image5 from "../assets/images/villa_interior.png";

const galleryImages = [
  {
    src: image1,
    title: "Coastal Living",
    category: "BLUESPOT 3.0",
  },
  {
    src: image2,
    title: "Your Future Home",
    category: "LIFESTYLE",
  },
  {
    src: image3,
    title: "A New Destination",
    category: "NEW BESANT NAGAR",
  },
  {
    src: image4,
    title: "Life by the Coast",
    category: "COASTAL LIFESTYLE",
  },
  {
    src: image5,
    title: "Your Space",
    category: "BLUESPOT 3.0",
  },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrevious = (e) => {
    e?.stopPropagation();

    setSelectedIndex((current) =>
      current === 0
        ? galleryImages.length - 1
        : current - 1
    );
  };

  const showNext = (e) => {
    e?.stopPropagation();

    setSelectedIndex((current) =>
      current === galleryImages.length - 1
        ? 0
        : current + 1
    );
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#062033] py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D9B77A]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9B77A]">
                Gallery
              </span>
            </div>

            <p className="text-sm uppercase tracking-[0.2em] text-white/30">
              Bluespot 3.0
            </p>
          </div>

          <div>
            <h2 className="font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-8xl">
              See the
              <br />

              <span className="italic text-[#D9B77A]">
                possibilities.
              </span>
            </h2>
          </div>
        </motion.div>

        {/* ================= INTRO ================= */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 max-w-2xl text-base leading-8 text-white/50 sm:text-lg"
        >
          Explore the coastal character, lifestyle and vision
          behind Bluespot 3.0 — your opportunity to create a
          space of your own.
        </motion.p>

        {/* ================= GALLERY GRID ================= */}

        <div className="mt-16 grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">

          {/* ================= LARGE IMAGE ================= */}

          <motion.button
            type="button"
            onClick={() => openLightbox(0)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative min-h-[500px] overflow-hidden rounded-[1.5rem] text-left sm:min-h-[620px] lg:min-h-[720px]"
          >
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].title}
              className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#062033]/90 via-[#062033]/10 to-transparent" />

            {/* Top label */}
            <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-8 sm:top-8">
              <span className="text-xs font-semibold tracking-[0.2em] text-white/50">
                01
              </span>

              <span className="h-px w-7 bg-white/30" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                {galleryImages[0].category}
              </span>
            </div>

            {/* Expand icon */}
            <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white backdrop-blur-md transition duration-300 group-hover:bg-[#D9B77A] group-hover:text-[#062033] sm:right-8 sm:top-8">
              <FiMaximize2 size={17} />
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9 sm:right-9">
              <p className="text-xs uppercase tracking-[0.25em] text-[#D9B77A]">
                {galleryImages[0].category}
              </p>

              <h3 className="mt-2 font-serif text-4xl sm:text-5xl">
                {galleryImages[0].title}
              </h3>

              <div className="mt-5 flex items-center gap-2 text-sm text-white/60">
                View image

                <FiArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </div>
          </motion.button>

          {/* ================= SMALL IMAGES ================= */}

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">

            {galleryImages.slice(1).map((image, index) => {
              const actualIndex = index + 1;

              return (
                <motion.button
                  key={image.src}
                  type="button"
                  onClick={() => openLightbox(actualIndex)}
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
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className="group relative min-h-[220px] overflow-hidden rounded-[1.25rem] text-left sm:min-h-[260px] lg:min-h-0"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062033]/80 via-transparent to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />

                  {/* Number */}
                  <span className="absolute left-5 top-5 text-xs font-semibold tracking-[0.2em] text-white/50">
                    0{actualIndex + 1}
                  </span>

                  {/* Expand */}
                  <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white backdrop-blur-md transition duration-300 group-hover:bg-[#D9B77A] group-hover:text-[#062033]">
                    <FiMaximize2 size={14} />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D9B77A]">
                      {image.category}
                    </p>

                    <h3 className="mt-1 font-serif text-xl sm:text-2xl">
                      {image.title}
                    </h3>
                  </div>
                </motion.button>
              );
            })}

          </div>
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
            Every picture represents a possibility — a home,
            an investment and a future shaped by you.
          </p>

          <button
            type="button"
            onClick={() => openLightbox(0)}
            className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D9B77A]"
          >
            Explore Gallery

            <FiArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </div>

      {/* ================= LIGHTBOX ================= */}

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020B12]/95 p-5 backdrop-blur-md sm:p-10"
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#D9B77A] hover:text-[#062033] sm:right-8 sm:top-8"
            >
              <FiX size={20} />
            </button>

            {/* Previous */}
            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#D9B77A] hover:text-[#062033] sm:left-8"
            >
              <FiChevronLeft size={21} />
            </button>

            {/* Image */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] max-w-[90vw]"
            >
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].title}
                className="max-h-[78vh] max-w-full rounded-xl object-contain shadow-2xl"
              />

              <div className="mt-4 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D9B77A]">
                  {galleryImages[selectedIndex].category}
                </p>

                <h3 className="mt-1 font-serif text-2xl text-white">
                  {galleryImages[selectedIndex].title}
                </h3>

                <p className="mt-1 text-xs text-white/30">
                  {selectedIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              type="button"
              onClick={showNext}
              className="absolute right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#D9B77A] hover:text-[#062033] sm:right-8"
            >
              <FiChevronRight size={21} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;