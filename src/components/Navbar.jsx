import { memo } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSquareXTwitter,
  FaMoon,
  FaSun,
} from "react-icons/fa6";
import logo from "../assets/logo.webp";
import { useTheme } from "../context/ThemeContext";

const socialLinks = [
  { Icon: FaGithub, href: "https://github.com/DennisAbinayo", hoverColor: "" },
  { Icon: FaSquareXTwitter, href: "#", hoverColor: "hover:text-[#1DA1F2]" },
  { Icon: FaInstagram, href: "#", hoverColor: "hover:text-[#E1306C]" },
  { Icon: FaLinkedin, href: "#", hoverColor: "hover:text-[#0077B5]" },
];

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center mb-20 py-6 h-16">
      <div className="flex flex-shrink-0 items-center">
        <a
          href="/"
          className="hover:scale-125 transition-all duration-500 cursor-pointer"
        >
          <img src={logo} alt="logo" className="mx-2 w-10" />
        </a>
      </div>

      <div className="text-2xl flex items-center justify-center m-8 gap-4">
        {socialLinks.map(({ Icon, href, hoverColor }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:scale-125 transition-all text-3xl duration-500 cursor-pointer ${hoverColor}`}
          >
            <Icon />
          </a>
        ))}
        <button
          onClick={toggleTheme}
          className="hover:scale-125  transition-all duration-500 cursor-pointer text-3xl md:fixed md:top-[50%] md:right-9 "
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default memo(Navbar);
