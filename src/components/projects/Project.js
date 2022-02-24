import React from "react";
import "./Project.css";
import { ProjectData } from "../data/Projects";
import ProjectCard from "./ProjectCard";
import Seperator from "../Seperator/Seperator";


export function Project() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Seperator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}
