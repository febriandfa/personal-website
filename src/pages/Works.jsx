import React from "react";
import Layout from "../layouts/Layout";
import Card from "../components/Card";
import { Begagan, Design, Eduhug, Jembul, Koppi, Porto, Quliqu, Urban, Xproject } from "../assets";
import CardProgress from "../components/CardProgress";

const Works = () => {
  return (
    <Layout>
      <div>
        <h1 className="font-bold lg:text-5xl text-3xl text-left lg:mb-10 mb-7">#AllMyWorks</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-7">
          <Card img={Jembul} title="Jembul Smart Village" language="HTML, TailwindCSS, Laravel Blade, Alpine.js, Flowbite" link="https://desa-jembul.com/" />
          <Card img={Xproject} title="X-Project 9.0" language="HTML, TailwindCSS, ReactJS, React Router, Flowbite" link="https://xproject9.netlify.app/" />
          <Card img={Begagan} title="Desa Begaganlimo" language="HTML, TailwindCSS, ReactJS, Horizon UI" link="https://desabegaganlimo.netlify.app/" />
          <Card img={Quliqu} title="Quliqu" language="HTML, TailwindCSS, ReactJS" link="https://quliqu.netlify.app/" />
          <Card img={Design} title="D'esign" language="HTML, CSS" link="https://d-esign-website.netlify.app/" />
          <Card img={Porto} title="DFA Portfolio" language="HTML, TailwindCSS, ReactJS, React Router" link="https://febriandfa.netlify.app/" />
          <Card img={Eduhug} title="EduHug" language="HTML, CSS, JavaScript" link="https://eduhug.netlify.app/" />
          <Card img={Koppi} title="Koppi University" language="HTML, CSS, JavaScript" link="https://koppiuniv.netlify.app/" />
          <Card img={Urban} title="Urban Scholaria" language="HTML, TailwidCSS, ReactJS, ViteJS, Flutter, React Router" link="https://urbanskuy.netlify.app/" />
        </div>
      </div>
    </Layout>
  );
};

export default Works;
