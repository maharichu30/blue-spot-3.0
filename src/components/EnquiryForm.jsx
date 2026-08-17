import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    plotSize: "",
    enquiryType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Enquiry:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      plotSize: "",
      enquiryType: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const openWhatsApp = () => {
    const phoneNumber = "919600033336";

    const message = encodeURIComponent(
      "Hi, I am interested in Bluespot 3.0. Please share the project details, plot availability and pricing."
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#062033] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#0b5d83]/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#D9B77A]/10 blur-3xl" />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#D9B77A]" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9B77A]">
              Get In Touch
            </span>
          </div>

          <h2 className="font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-8xl">
            Your plot is
            <br />

            <span className="italic text-[#D9B77A]">
              one conversation away.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
            Interested in Bluespot 3.0? Share your details and
            our property team will help you with availability,
            pricing, EMI and site-visit information.
          </p>
        </motion.div>

        {/* ================= MAIN GRID ================= */}

        <div className="mt-16 grid gap-5 lg:grid-cols-[0.65fr_1.35fr]">

          {/* ================= LEFT INFO ================= */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-7 sm:p-9 lg:p-10"
          >
            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B77A]">
                Bluespot 3.0
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Let's make
                <br />

                <span className="text-white/40">
                  it yours.
                </span>
              </h3>

              {/* Contact details */}

              <div className="mt-10 space-y-6 border-t border-white/10 pt-8">

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D9B77A]/10 text-[#D9B77A]">
                    <FiPhone size={16} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                      Call Us
                    </p>

                    <p className="mt-1 text-sm text-white/70">
                      +91 XXXXX XXXXX
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D9B77A]/10 text-[#D9B77A]">
                    <FiMail size={16} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-white/70">
                      info@example.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D9B77A]/10 text-[#D9B77A]">
                    <FiMapPin size={16} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-white/70">
                      ECR Coastal Corridor
                    </p>
                  </div>
                </div>

              </div>

              {/* Benefits */}

              <div className="mt-9 border-t border-white/10 pt-7">

                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Enquire for
                </p>

                <div className="mt-4 space-y-3">

                  {[
                    "Latest plot availability",
                    "Current project pricing",
                    "EMI & payment details",
                    "Site visit assistance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D9B77A]/10 text-[#D9B77A]">
                        <FiCheck size={11} />
                      </span>

                      <span className="text-sm text-white/55">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>
              </div>
            </div>

            {/* WhatsApp */}

            <button
              type="button"
              onClick={openWhatsApp}
              className="mt-10 flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#062033]"
            >
              Chat on WhatsApp

              <FiArrowUpRight size={16} />
            </button>

          </motion.div>

          {/* ================= FORM ================= */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[1.5rem] bg-[#f7f5ef] p-7 text-[#062033] sm:p-9 lg:p-10"
          >

            {submitted ? (
              <div className="flex min-h-[550px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0b5d83] text-white">
                  <FiCheck size={28} />
                </div>

                <h3 className="mt-7 font-serif text-4xl sm:text-5xl">
                  Thank you.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#61737e]">
                  Your enquiry has been received. Our property
                  team will get in touch with you shortly.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#0b5d83]"
                >
                  Send another enquiry
                </button>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* FORM HEADER */}

                <div className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0b5d83]">
                    Enquiry Form
                  </p>

                  <h3 className="mt-3 font-serif text-4xl sm:text-5xl">
                    Tell us what
                    <br />
                    you're looking for.
                  </h3>
                </div>

                {/* NAME + PHONE */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#526774]">
                      Full Name
                    </label>

                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="mt-2 h-12 w-full rounded-xl border border-[#062033]/10 bg-white px-4 text-sm outline-none transition focus:border-[#0b5d83]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#526774]">
                      Phone Number
                    </label>

                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      pattern="[0-9]{10}"
                      className="mt-2 h-12 w-full rounded-xl border border-[#062033]/10 bg-white px-4 text-sm outline-none transition focus:border-[#0b5d83]"
                    />
                  </div>

                </div>

                {/* EMAIL */}

                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#526774]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="mt-2 h-12 w-full rounded-xl border border-[#062033]/10 bg-white px-4 text-sm outline-none transition focus:border-[#0b5d83]"
                  />
                </div>

                {/* PLOT SIZE + ENQUIRY TYPE */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#526774]">
                      Preferred Plot Size
                    </label>

                    <select
                      name="plotSize"
                      value={formData.plotSize}
                      onChange={handleChange}
                      className="mt-2 h-12 w-full rounded-xl border border-[#062033]/10 bg-white px-4 text-sm outline-none focus:border-[#0b5d83]"
                    >
                      <option value="">
                        Select plot size
                      </option>

                      <option value="800 Sq.Ft">
                        800 Sq.Ft
                      </option>

                      <option value="1000 Sq.Ft">
                        1000 Sq.Ft
                      </option>

                      <option value="1200 Sq.Ft">
                        1200 Sq.Ft
                      </option>

                      <option value="1500 Sq.Ft">
                        1500 Sq.Ft
                      </option>

                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#526774]">
                      Enquiry For
                    </label>

                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="mt-2 h-12 w-full rounded-xl border border-[#062033]/10 bg-white px-4 text-sm outline-none focus:border-[#0b5d83]"
                    >
                      <option value="">
                        Select enquiry
                      </option>

                      <option value="Plot Purchase">
                        Plot Purchase
                      </option>

                      <option value="Pricing">
                        Pricing
                      </option>

                      <option value="EMI">
                        EMI Details
                      </option>

                      <option value="Site Visit">
                        Site Visit
                      </option>

                    </select>
                  </div>

                </div>

                {/* MESSAGE */}

                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#526774]">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us what you'd like to know..."
                    className="mt-2 w-full resize-none rounded-xl border border-[#062033]/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0b5d83]"
                  />
                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  className="group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#062033] text-sm font-semibold text-white transition hover:bg-[#0b5d83]"
                >
                  Send Enquiry

                  <FiSend
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-[10px] leading-5 text-[#062033]/35">
                  By submitting this form, you agree to be contacted
                  regarding Bluespot 3.0 project details.
                </p>

              </form>
            )}

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;