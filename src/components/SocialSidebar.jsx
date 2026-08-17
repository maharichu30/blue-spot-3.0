import {
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "YouTube",
    icon: <FaYoutube />,
    url: "https://www.youtube.com/@ManjuGroup",
    iconColor: "text-red-500",
    hoverColor: "hover:bg-red-500 hover:text-white",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    url: "https://wa.me/919600033336",
    iconColor: "text-green-500",
    hoverColor: "hover:bg-green-500 hover:text-white",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/manjugroups_official/",
    iconColor: "text-pink-500",
    hoverColor: "hover:bg-pink-500 hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    url: "https://in.linkedin.com/company/manju-groups",
    iconColor: "text-blue-500",
    hoverColor: "hover:bg-blue-500 hover:text-white",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/manjufoundations/",
    iconColor: "text-sky-500",
    hoverColor: "hover:bg-sky-500 hover:text-white",
  },
];

function SocialSidebar() {
  return (
    <aside
      className="
        fixed
        right-0
        top-1/2
        z-[60]
        -translate-y-1/2
      "
    >
      <div
        className="
          flex
          flex-col
          overflow-hidden
          rounded-l-2xl
          border
          border-[#06202A]/10
          bg-blue-900/90
          shadow-lg
          backdrop-blur-md
        "
      >
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            title={social.name}
            className={`
              group
              flex
              h-11
              w-11
              items-center
              justify-center
              border-b
              border-[#06202A]/8
              bg-[#071A2B]/80
              text-lg
              transition-all
              duration-300

              last:border-b-0

              hover:-translate-x-1
              ${social.iconColor}
              ${social.hoverColor}

              sm:h-12
              sm:w-12
              sm:text-xl
            `}
          >
            <span
              className="
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              {social.icon}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}

export default SocialSidebar;