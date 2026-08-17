import {
  FiArrowUpRight,
  FiChevronUp,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // ================= CONTACT DETAILS =================

  const phoneNumber = "96000 33336";
  const phoneLink = "tel:+919600033336";

  const email = "info@manjugroups.com";
  const emailLink = "mailto:info@manjugroups.com";

  const whatsappLink = "https://wa.me/919600033336";

  // ================= SOCIAL LINKS =================
  // Replace these URLs with Manju Groups' actual social-media links.

  const socialLinks = {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/",
  };

  // ================= NAVIGATION =================

  const exploreLinks = [
    ["Overview", "overview"],
    ["Project Highlights", "highlights"],
    ["New Besant Nagar", "new-besant-nagar"],
    ["Location", "location"],
    ["Plot Options", "plots"],
    ["Amenities", "amenities"],
    ["Gallery", "gallery"],
  ];

  return (
    <footer className="bg-[#020F19] text-white">

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr_0.85fr]">

          {/* =================================================
              BRAND
          ================================================= */}

          <div>

            {/* Small Label */}

            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D9B77A]" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9B77A]">
                Manju Groups Presents
              </p>
            </div>

            {/* Brand */}

            <h2 className="mt-6 font-serif text-5xl leading-none sm:text-6xl lg:text-7xl">
              Bluespot
              <span className="italic text-[#D9B77A]">
                {" "}3.0
              </span>
            </h2>

            <p className="mt-5 max-w-lg font-serif text-2xl text-white/60 sm:text-3xl">
              The new
              <span className="italic text-white">
                {" "}Besant Nagar.
              </span>
            </p>

            {/* Description */}

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/40">
              A thoughtfully positioned plotted development
              designed around coastal living, connectivity and
              future possibilities.
            </p>

            {/* CTA */}

            <button
              onClick={() => scrollToSection("contact")}
              className="group mt-8 flex items-center gap-3 rounded-full bg-[#D9B77A] px-6 py-4 text-sm font-semibold text-[#062033] transition-all duration-300 hover:bg-white"
            >
              Enquire Now

              <FiArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>

          </div>

          {/* =================================================
              EXPLORE
          ================================================= */}

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30">
              Explore
            </p>

            <div className="mt-7 space-y-4">

              {exploreLinks.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="group flex items-center gap-2 text-left text-sm text-white/50 transition-all duration-300 hover:text-white"
                >
                  {label}

                  <FiArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </button>
              ))}

            </div>

          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30">
              Get In Touch
            </p>

            <div className="mt-7 space-y-6">

              {/* PHONE */}

              <div className="group">
                <div className="flex items-center gap-3">

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#D9B77A]">
                    <FiPhone size={15} />
                  </span>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                      Call Us
                    </p>

                    <a
                      href={phoneLink}
                      className="mt-1 block text-sm text-white/70 transition hover:text-[#D9B77A]"
                    >
                      {phoneNumber}
                    </a>
                  </div>

                </div>
              </div>

              {/* EMAIL */}

              <div>
                <div className="flex items-center gap-3">

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#D9B77A]">
                    <FiMail size={15} />
                  </span>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                      Email
                    </p>

                    <a
                      href={emailLink}
                      className="mt-1 block text-sm text-white/70 transition hover:text-[#D9B77A]"
                    >
                      {email}
                    </a>
                  </div>

                </div>
              </div>

              {/* LOCATION */}

              <div>
                <div className="flex items-center gap-3">

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#D9B77A]">
                    <FiMapPin size={15} />
                  </span>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-white/70">
                      ECR Coastal Corridor
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* =================================================
                WHATSAPP
            ================================================= */}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 flex w-fit items-center gap-3 rounded-full border border-[#D9B77A]/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#D9B77A] transition-all duration-300 hover:border-[#D9B77A] hover:bg-[#D9B77A] hover:text-[#062033]"
            >
              <FaWhatsapp size={16} />

              WhatsApp Us

              <FiArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

          </div>

        </div>

        {/* =====================================================
            SOCIAL MEDIA
        ====================================================== */}

        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            {/* Social Text */}

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30">
                Follow Manju Groups
              </p>

              <p className="mt-2 text-sm text-white/40">
                Stay connected with our latest projects and updates.
              </p>
            </div>

            {/* Social Icons */}

            <div className="flex items-center gap-3">

              {/* Instagram */}

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-300 hover:border-[#D9B77A] hover:bg-[#D9B77A] hover:text-[#062033]"
              >
                <FaInstagram size={17} />
              </a>

              {/* Facebook */}

              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-300 hover:border-[#D9B77A] hover:bg-[#D9B77A] hover:text-[#062033]"
              >
                <FaFacebookF size={15} />
              </a>

              {/* YouTube */}

              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-300 hover:border-[#D9B77A] hover:bg-[#D9B77A] hover:text-[#062033]"
              >
                <FaYoutube size={17} />
              </a>

              {/* WhatsApp */}

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-300 hover:border-[#D9B77A] hover:bg-[#D9B77A] hover:text-[#062033]"
              >
                <FaWhatsapp size={17} />
              </a>

            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM DIVIDER
        ====================================================== */}

        <div className="mt-10 border-t border-white/10 pt-7">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            {/* Copyright */}

            <p className="text-xs text-white/25">
              © {new Date().getFullYear()} Manju Groups.
              All rights reserved.
            </p>

            {/* Links */}

            <div className="flex flex-wrap gap-6">

              <button
                className="text-xs text-white/25 transition hover:text-white"
              >
                Privacy Policy
              </button>

              <button
                className="text-xs text-white/25 transition hover:text-white"
              >
                Terms & Conditions
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          BACK TO TOP
      ====================================================== */}

      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="group flex w-full items-center justify-center gap-2 border-t border-white/10 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/30 transition-all duration-300 hover:text-[#D9B77A]"
      >
        Back to top

        <FiChevronUp
          size={15}
          className="transition-transform duration-300 group-hover:-translate-y-1"
        />
      </button>

    </footer>
  );
};

export default Footer;