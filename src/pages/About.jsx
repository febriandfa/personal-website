import React from "react";
import Layout from "../layouts/Layout";
import Timeline from "../components/Timeline";
// import { Fotoku } from "../assets";
import { easeIn, motion } from "framer-motion";
import skills from "../datas/skills.json";
import organizations from "../datas/organizations.json";
import works from "../datas/works.json";

const About = () => {
  return (
    <Layout>
      <div>
        {/* About Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-6 grid-cols-1 grid-rows-1 lg:gap-x-10 lg:gap-y-0 gap-y-5">
            <div className="col-span-4">
              <h1 className="font-bold lg:text-5xl text-3xl text-left lg:mb-10 mb-7">#AboutMe</h1>
              <img className="lg:w-3/5 w-full h-40 object-cover mb-5 rounded" src="/assets/foto.jpg" alt="fotoku" />
              <p className="lg:text-lg text-base font-light lg:leading-normal leading-8">
                My name is <span class="highlight-text">Febrian Daffa Eka Putra</span> you can call me <span class="highlight-text">Daffa</span>, I am a <span class="highlight-text">Full-Stack Web Developer</span> and currently a Bachelor's
                degree student majoring in <span class="highlight-text">Information Systems</span>. I have a strong foundation in core web technologies including <span class="highlight-text">HTML, CSS, JavaScript, PHP, and TypeScript</span>
                . Skilled using modern frameworks and libraries such as <span class="highlight-text">React, Next.js, Laravel, TailwindCSS, Bootstrap</span> and currently expoloring{" "}
                <span class="highlight-text">MongoDB, Node.js, Express.js, and Astro</span>. Skilled in the use of version control using <span class="highlight-text">Git and Github</span>. I am committed to continuing to learn and
                enthusiastic about applying my knowledge to provide high quality solutions.
              </p>
            </div>
            <div className="col-span-2">
              <h1 className="font-bold lg:text-5xl text-3xl text-left lg:mb-10 mb-7">#Skills</h1>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-3 justify-start mx-auto">
                {skills.map((skill) => (
                  <>
                    <p className="inline-block py-1 px-3 rounded border border-black text-lg">{skill.name}</p>
                    <hr className="w-7 border-b-2 rounded border-black" />
                  </>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}

        {/* Work Section */}
        <section className="mb-20">
          <h1 className="font-bold lg:text-5xl text-3xl text-center mb-10">
            #Work
            <br className="md:hidden block" />
            Experience
          </h1>
          <div className="w-fit mx-auto">
            {works.map((work) => (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { type: easeIn, duration: 2 } }} viewport={{ once: true }}>
                <Timeline date={`${work.start_date} - ${work.end_date}`} position={work.position} organization={work.company} />
              </motion.div>
            ))}
          </div>
        </section>
        {/* Work Section */}

        {/* Organization Section */}
        <section>
          <h1 className="font-bold lg:text-5xl text-3xl text-center mb-10">
            #Organization
            <br className="md:hidden block" />
            Experience
          </h1>
          <div className="w-fit mx-auto">
            {organizations.map((organization) => (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { type: easeIn, duration: 2 } }} viewport={{ once: true }}>
                <Timeline date={`${organization.start_date} - ${organization.end_date}`} position={organization.position} organization={organization.organization} />
              </motion.div>
            ))}
          </div>
        </section>
        {/* Organization Section */}
      </div>
    </Layout>
  );
};

export default About;
