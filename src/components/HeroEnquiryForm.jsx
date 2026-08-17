import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiSend,
} from "react-icons/fi";

const HeroEnquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Hero Enquiry:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
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
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-full max-w-[420px] rounded-[1.5rem] bg-[#f7f5ef] p-5 text-[#062033] shadow-2xl sm:p-6"
    >
      {submitted ? (
        <div className="flex min-h-[380px] flex-col items-center justify-center text-center">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0b5d83] text-white">
            <FiCheck size={24} />
          </div>

          <h3 className="mt-5 font-serif text-3xl">
            Thank You!
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#61737e]">
            Our property team will contact you shortly
            regarding Bluespot 3.0.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#0b5d83]"
          >
            Send Again
          </button>

        </div>
      ) : (
        <form onSubmit={handleSubmit}>

          {/* HEADER */}

          <div className="mb-5">

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0b5d83]">
              Bluespot 3.0
            </p>

            <h3 className="mt-2 font-serif text-3xl leading-tight sm:text-4xl">
              Enquire
              <span className="italic text-[#0b5d83]">
                {" "}Now
              </span>
            </h3>

            <p className="mt-2 text-xs leading-5 text-[#61737e]">
              Get plot availability, pricing and site visit
              details.
            </p>

          </div>

          {/* NAME */}

          <div className="mb-3">

            <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#526774]">
              Name
            </label>

            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="mt-1.5 h-11 w-full rounded-lg border border-[#062033]/10 bg-white px-3 text-sm outline-none transition focus:border-[#0b5d83]"
            />

          </div>

          {/* PHONE */}

          <div className="mb-3">

            <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#526774]">
              Phone Number
            </label>

            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              pattern="[0-9]{10}"
              className="mt-1.5 h-11 w-full rounded-lg border border-[#062033]/10 bg-white px-3 text-sm outline-none transition focus:border-[#0b5d83]"
            />

          </div>

          {/* EMAIL */}

          <div className="mb-4">

            <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#526774]">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-1.5 h-11 w-full rounded-lg border border-[#062033]/10 bg-white px-3 text-sm outline-none transition focus:border-[#0b5d83]"
            />

          </div>

          {/* SUBMIT */}

          <button
            type="submit"
            className="group flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#062033] text-sm font-semibold text-white transition hover:bg-[#0b5d83]"
          >
            Get Project Details

            <FiSend
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          {/* WHATSAPP */}

          <button
            type="button"
            onClick={openWhatsApp}
            className="group mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#062033]/10 bg-white text-xs font-semibold text-[#062033] transition hover:border-[#0b5d83] hover:text-[#0b5d83]"
          >
            WhatsApp Us

            <FiArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>

          <p className="mt-3 text-center text-[9px] leading-4 text-[#062033]/35">
            By submitting your details, you agree to be contacted
            regarding Bluespot 3.0.
          </p>

        </form>
      )}
    </motion.div>
  );
};

export default HeroEnquiryForm;