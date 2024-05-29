import React from "react";
import Layout from "../layouts/Layout";
import Timeline from "../components/Timeline";
import { Fotoku } from "../assets";
import { easeIn, motion } from "framer-motion";

const About = () => {
  return (
    <Layout>
      <div>
        {/* About Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-6 grid-cols-1 grid-rows-1 lg:gap-x-10 lg:gap-y-0 gap-y-5">
            <div className="col-span-4">
              <h1 className="font-bold lg:text-5xl text-3xl text-left lg:mb-10 mb-7">#AboutMe</h1>
              <img className="lg:w-3/5 w-full h-40 object-cover mb-5 rounded" src={Fotoku} alt="fotoku" />
              <p className="lg:text-lg text-base font-light lg:leading-normal leading-8">
                Greetings! My name is <span className="border-b-2 border-black text-lg leading-tight inline font-medium">Febrian Daffa Eka Putra</span> you can call me{" "}
                <span className="border-b-2 border-black text-lg leading-tight inline font-medium">Daffa</span>, and I am currently a{" "}
                <span className="border-b-2 border-black text-lg leading-tight inline font-medium">Bachelor's Degree</span> student majoring in{" "}
                <span className="border-b-2 border-black text-lg leading-tight inline font-medium">Informatic Engineering</span> at Surabaya State University. I have a strong passion for{" "}
                <span className="border-b-2 border-black text-lg leading-tight inline font-medium">Full-Stack Development</span>, and I have participated in several committees to gain organizational experience. As a proactive learner, I am
                always seeking opportunities to further enhance my skills and knowledge in these areas. I look forward to work together with you.
              </p>
            </div>
            <div className="col-span-2">
              <h1 className="font-bold lg:text-5xl text-3xl text-left lg:mb-10 mb-7">#Skills</h1>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-3 justify-start mx-auto">
                <p className="inline-block py-1 px-3 rounded border border-black text-lg">HTML</p>
                <hr className="w-7 border-b-2 rounded border-black" />
                <p className="inline-block py-1 px-3 rounded border border-black text-lg">CSS</p>
                <hr className="w-7 border-b-2 rounded border-black" />
                <p className="inline-block py-1 px-3 rounded border border-black text-lg">JavaScript</p>
                <hr className="w-7 border-b-2 rounded border-black" />
                <p className="inline-block py-1 px-3 rounded border border-black text-lg">TypeScript</p>
                <hr className="w-7 border-b-2 rounded border-black" />
                <p className="inline-block py-1 px-3 rounded border border-black text-lg">PHP</p>
                <hr className="w-7 border-b-2 rounded border-black" />
                <p className="inline-block py-1 px-3 rounded border border-black text-lg">ReactJs</p>
                <hr className="w-7 border-b-2 rounded border-black" />
                <p className="inline-block py-1 px-3 rounded border border-black text-lg">Next.js</p>
                <hr className="w-7 border-b-2 rounded border-black" />
                <p className="inline-block py-1 px-3 rounded border border-black text-lg">TailwindCSS</p>
                <hr className="w-7 border-b-2 rounded border-black" />
                <p className="inline-block py-1 px-3 rounded border border-black text-lg">Bootstrap</p>
                <hr className="w-7 border-b-2 rounded border-black" />
                <p className="inline-block py-1 px-3 rounded border border-black text-lg">Laravel</p>
                <hr className="w-7 border-b-2 rounded border-black" />
                <p className="inline-block py-1 px-3 rounded border border-black text-lg">Git</p>
                <hr className="w-7 border-b-2 rounded border-black" />
                <p className="inline-block py-1 px-3 rounded border border-black text-lg">GitHub</p>
                <hr className="w-7 border-b-2 rounded border-black" />
                <p className="inline-block py-1 px-3 rounded border border-black text-lg">Postman</p>
                <hr className="w-7 border-b-2 rounded border-black" />
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}

        {/* Organization Section */}
        <section>
          <h1 className="font-bold lg:text-5xl text-3xl text-center mb-10">
            #Organization
            <br className="md:hidden block" />
            Experience
          </h1>
          <div className="w-fit mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { type: easeIn, duration: 2 } }} viewport={{ once: true }}>
              <Timeline date="January 2022 - July 2022" position="Staff of Social Media & Content Creator" organization="HIMPI PT UNESA - Himpunan Pengusaha Muda Indonesia Perguruan Tinggi UNESA" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { type: easeIn, duration: 2 } }} viewport={{ once: true }}>
              <Timeline date="February 2022 - December 2022" position="Staff of Interest and Talent Department" organization="HIMTI UNESA - Himpunan Teknik Informatika UNESA" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { type: easeIn, duration: 2 } }} viewport={{ once: true }}>
              <Timeline date="January 2023 - December 2023" position="Head of Interest and Talent Department" organization="HIMTI UNESA - Himpunan Teknik Informatika UNESA" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { type: easeIn, duration: 2 } }} viewport={{ once: true }}>
              <Timeline date="October 2023 - Present" position="Director of Research and Development Division" organization="GDSC@UNESA - Googel Developer Student Community @ UNESA" />
            </motion.div>
          </div>
        </section>
        {/* Organization Section */}
      </div>
    </Layout>
  );
};

export default About;
