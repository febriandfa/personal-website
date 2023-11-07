import React from "react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <section className="h-full lg:px-40 px-5">
      <Navbar />
      <motion.main className="lg:pt-10 pt-5 pb-20 flex flex-col justify-center" initial={{ y: "100vh" }} animate={{ y: 0, transition: { damping: 10, stiffness: 100 } }} exit={{ y: "-100vh" }}>
        {children}
      </motion.main>
      <Footer />
    </section>
  );
};

export default Layout;
