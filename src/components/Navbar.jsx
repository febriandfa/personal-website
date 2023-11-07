import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  return (
    <header>
      <nav className="w-full bg-background font-medium text-base">
        {/* Desktop Nav Menu */}
        <ul className="flex justify-between py-4 border-b-2 border-black">
          <li>
            <a className="font-dmmono font-medium text-xl" href="/">
              Febrian.
              <br />
              Dfa-
            </a>
          </li>
          <li className="md:inline-block hidden ">
            <a
              className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-black hover:before:w-full hover:before:opacity-100"
              href="/"
            >
              <span className="font-semibold text-xl">*</span> Home
            </a>
          </li>
          <li className="md:inline-block hidden">
            <a
              className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-black hover:before:w-full hover:before:opacity-100"
              href="/about"
            >
              <span className="font-semibold text-xl">*</span> About
            </a>
          </li>
          <li className="md:inline-block hidden">
            <a
              className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-black hover:before:w-full hover:before:opacity-100"
              href="/works"
            >
              <span className="font-semibold text-xl">*</span> Works
            </a>
          </li>
          <li className="md:inline-block hidden">
            <ul className="flex flex-col gap-1">
              <li>
                <a
                  className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-black hover:before:w-full hover:before:opacity-100"
                  href="https://www.instagram.com/_ddffaa/"
                >
                  <span className="font-semibold text-xl">*</span> Instagram
                </a>
              </li>
              <li>
                <a
                  className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-black hover:before:w-full hover:before:opacity-100"
                  href="https://www.linkedin.com/in/febriandaffa/"
                >
                  <span className="font-semibold text-xl">*</span> Linkedin
                </a>
              </li>
              <li>
                <a
                  className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-black hover:before:w-full hover:before:opacity-100"
                  href="https://github.com/febriandfa"
                >
                  <span className="font-semibold text-xl">*</span> Github
                </a>
              </li>
            </ul>
          </li>
          <motion.li className="md:inline-block hidden border-2 border-black h-fit rounded" whileHover={{ scale: 1.1 }}>
            <a className="px-4 py-1" href="/contact">
              Contact
            </a>
          </motion.li>
          <li className="md:hidden inline-block">
            <motion.div whileTap={{ scale: 0.8, rotate: 180 }}>
              <button className="w-7 h-7" onClick={toggleIsOpen}>
                {!isOpen ? (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g id="Menu / Hamburger_MD">
                        {" "}
                        <path id="Vector" d="M5 17H19M5 12H19M5 7H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g id="Menu / Close_MD">
                        {" "}
                        <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                )}
              </button>
            </motion.div>
          </li>
        </ul>
        {/* Desktop Nav Menu */}

        {/* Mobile Nav Menu */}
        {isOpen && (
          <motion.ul variants={menuVariants} animate={isOpen ? "open" : "closed"} initial="closed" className="lg:hidden flex flex-col gap-3 py-4 pl-2 border-b-2 border-black">
            <li>
              <a
                className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-black hover:before:w-full hover:before:opacity-100"
                href="/"
              >
                * Home
              </a>
            </li>
            <li>
              <a
                className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-black hover:before:w-full hover:before:opacity-100"
                href="/about"
              >
                * About
              </a>
            </li>
            <li>
              <a
                className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-black hover:before:w-full hover:before:opacity-100"
                href="/works"
              >
                * Works
              </a>
            </li>
            <li>
              <ul className="flex gap-8">
                <li>
                  <a
                    className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-black hover:before:w-full hover:before:opacity-100"
                    href="https://www.instagram.com/_ddffaa/"
                  >
                    * Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-black hover:before:w-full hover:before:opacity-100"
                    href="https://www.linkedin.com/in/febriandaffa/"
                  >
                    * Linkedin
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-black hover:before:w-full hover:before:opacity-100"
                    href="https://github.com/febriandfa"
                  >
                    * Github
                  </a>
                </li>
              </ul>
            </li>
            <motion.li className="border-2 border-black w-fit h-fit rounded" whileHover={{ scale: 1.1 }}>
              <a className="px-4 py-1" href="/contact">
                Contact
              </a>
            </motion.li>
          </motion.ul>
        )}
        {/* Mobile Nav Menu */}
      </nav>
    </header>
  );
};

export default Navbar;
