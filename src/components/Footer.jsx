import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const location = useLocation();
  let prevLink;
  let nextLink;

  if (location.pathname === "/") {
    nextLink = "/about";
  } else if (location.pathname === "/about") {
    prevLink = "/";
    nextLink = "/works";
  } else if (location.pathname === "/works") {
    prevLink = "/about";
    nextLink = "/contact";
  } else if (location.pathname === "/contact") {
    prevLink = "/works";
  }

  return (
    <footer>
      <div className="fixed lg:bottom-10 bottom-7 lg:right-40 right-5">
        {location.pathname !== "/contact" && (
          <motion.a className="flex items-center gap-1 mb-3 bg-background py-0.5 px-3 border border-black rounded" href={nextLink} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Next Page
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
              </g>
            </svg>
          </motion.a>
        )}
        {location.pathname !== "/" && (
          <motion.a className="flex items-center gap-1 bg-background py-0.5 px-3 border border-black rounded" href={prevLink} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <svg className="w-5 h-5 rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
              </g>
            </svg>
            Prev Page
          </motion.a>
        )}
      </div>
    </footer>
  );
};

export default Footer;
