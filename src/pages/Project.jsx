import React from "react";
import Layout from "../layouts/Layout";
import Card from "../components/Card";
import projects from "../datas/projects.json";
import CardProgress from "../components/CardProgress";

const Project = () => {
  return (
    <Layout>
      <div>
        <h1 className="font-bold lg:text-5xl text-3xl text-left lg:mb-10 mb-7">#AllMyProjects</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-7">
          {projects.map((project) => (
            <Card img={project.img} name={project.name} stack={project.stack} website={project.website} github={project.github} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Project;
