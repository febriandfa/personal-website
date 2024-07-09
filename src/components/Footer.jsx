import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const location = useLocation();
  let prevLink;
  let nextLink;

  if (location.pathname === "/") {
    nextLink = "/about";
  } else if (location.pathname === "/about") {
    prevLink = "/";
    nextLink = "/project";
  } else if (location.pathname === "/project") {
    prevLink = "/about";
    nextLink = "/contact";
  } else if (location.pathname === "/contact") {
    prevLink = "/project";
  }

  return (
    <footer>
      <div className="fixed lg:bottom-10 bottom-7 lg:right-40 right-5">
        {location.pathname !== "/contact" && (
          <motion.button className="flex" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link className="flex items-center gap-1 mb-3 bg-background py-0.5 px-3 border border-black rounded" to={nextLink}>
              Next Page
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                </g>
              </svg>
            </Link>
          </motion.button>
        )}
        {location.pathname !== "/" && (
          <motion.button className="flex" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link className="flex items-center gap-1 bg-background py-0.5 px-3 border border-black rounded" to={prevLink}>
              <svg className="w-5 h-5 rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                </g>
              </svg>
              Prev Page
            </Link>
          </motion.button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
