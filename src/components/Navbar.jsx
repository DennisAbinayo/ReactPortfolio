import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center  mb-20 py-6 h-16">
      <div className="flex  flex-shrink-0 items-center">
        <a
          href="/"
          className="hover:scale-110 transition-all duration-500 cursor-pointer "
        >
          <img src={logo} alt="logo" className="mx-2 w-10" />
        </a>
      </div>

      <div className="text-2xl flex items-center justify-center m-8 gap-4">
        <a
          href="https://github.com/DennisAbinayo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-all duration-500 cursor-pointer "
        >
          <FaGithub />
        </a>

        <a
          href="#"
          className="hover:scale-110 transition-all duration-500 cursor-pointer hover:text-[#1DA1F2]"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="#"
          className="hover:scale-110 transition-all duration-500 cursor-pointer hover:text-[#E1306C]"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="hover:scale-110 transition-all duration-500 cursor-pointer hover:text-[#0077B5]"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
