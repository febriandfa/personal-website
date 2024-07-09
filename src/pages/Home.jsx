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
        <h3 className="font-bold lg:text-4xl text-2xl lg:w-full w-4/5 lg:mb-12 mb-8">Full-Stack Website Developer</h3>
        <p className="font-light lg:text-lg text-base lg:w-4/5 w-full lg:leading-normal leading-8">
          Hello Folks! My name <span className="highlight-text">Febrian Daffa Eka Putra</span>, I'm a <span className="highlight-text">Full-Stack Website Developer</span> with expertise in{" "}
          <span className="highlight-text">HTML, CSS, JavaScript, PHP, and TypeScript</span>. I'm skilled in using modern frameworks and libraries such as{" "}
          <span className="highlight-text">ReactJS, Next.js, Laravel, TailwindCSS, Bootstrap</span>. And currently expoloring <span class="highlight-text">MongoDB, Node.js, Express.js, and Astro</span>. Let's connect and work together!
        </p>
      </div>
    </Layout>
  );
};

export default Home;
