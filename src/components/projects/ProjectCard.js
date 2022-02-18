import React from "react";
import "./ProjectCard.css";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <p>{project.description}</p>
        <div className="project-links">
          {project.forntend && (
            <div className="link-button">
              <Button
                variant="contained"
                color="inherit"
                startIcon={<GitHubIcon />}
              >
                <a className="project-link" href={project.forntend}>
                  Fornt-End Code
                </a>
              </Button>
            </div>
          )}
          {project.backend && (
            <div className="link-button">
              <Button
                variant="contained"
                color="inherit"
                startIcon={<GitHubIcon />}
              >
                <a className="project-link" href={project.backend}>
                  Back-End Code
                </a>
              </Button>
            </div>
          )}
          {project.netlify && (
            <div className="link-button">
              <Button variant="contained" color="inherit">
                <a className="project-link" href={project.netlify}>
                  Netlify
                </a>
              </Button>
            </div>
          )}
        </div>
        <br />
        <div className="project-tags">
          <span>
            <b>Tags:</b>
          </span>
          <br />
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} className="project-photo" alt={project.title} />
    </div>
  );
}

export default ProjectCard;
