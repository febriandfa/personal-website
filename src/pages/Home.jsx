import React from "react";
import Layout from "../layouts/Layout";
import { easeIn, motion } from "framer-motion";

const Home = () => {
  return (
    <Layout>
      <div>
        <h1 className="font-bold lg:text-[11rem] text-[5rem] leading-[100%] text-left break-all lg:mb-0 mb-3">
          Febrian.
          <br className="lg:hidden block" />
          Dfa
        </h1>
        <h3 className="font-bold lg:text-4xl text-2xl lg:w-full w-4/5 lg:mb-12 mb-8">Front-End Website Developer</h3>
        <p className="font-light lg:text-lg text-base lg:w-4/5 w-full lg:leading-normal leading-8">
          Hello Folks! My name <span className="border-b-2 border-black text-lg leading-tight inline font-medium">Febrian Daffa Eka Putra</span>, I'm a{" "}
          <span className="border-b-2 border-black text-lg leading-tight inline font-medium">Front-End Developer</span> with expertise in{" "}
          <span className="border-b-2 border-black text-lg leading-tight inline font-medium">HTML, CSS, and JavaScript</span>. Currently, I'm expanding my skills to become a proficient in{" "}
          <span className="border-b-2 border-black text-lg leading-tight inline font-medium">Front-End Mobile Developer</span>. Let's connect and work together!
        </p>
      </div>
    </Layout>
  );
};

export default Home;
