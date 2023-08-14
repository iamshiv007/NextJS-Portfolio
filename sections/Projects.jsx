import React, { Fragment } from "react";
import Image from "next/image";
import { CgClapperBoard } from "react-icons/cg";
import { ProjectsData } from "@/constants";

export const Projects = () => {
  return (
    <Fragment>
      <section id="projects">
        <div className={`dark:bg-black py-8 bg-[#ecf8f9]`}>
          <div>
            <h3 className="sectionHeading">
              <span className="mr-4">
                <CgClapperBoard />
              </span>
              Projects
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-8">
            {ProjectsData.map((project) => (
              <div>
                <a target="_blank" href={project.url}>
                  <Image width={500} height={300} src={project.imageUrl} alt={project.name} />
                </a>
                <p className="text-center p-1">{project.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
