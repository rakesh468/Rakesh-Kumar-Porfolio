import React from "react";
import "./ProjectCard.css";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


function ProjectCard({ project }) {
  return (
    <Card className="project-card">
      <CardContent className="project-info">
        <label className="project-title">{project.title}</label>
        <p>{project.description}</p>
        <div className="project-links">
          {project.forntend && (
            <div className="link-button">
              <Button
                size="small"
                variant="contained"
                color="inherit"
                startIcon={<GitHubIcon />}
              >
                <a
                  className="project-link"
                  href={project.forntend}
                  target="_blank"
                  rel="noreferrer"
                >
                  Fornt-End Code
                </a>
              </Button>
            </div>
          )}
          {project.backend && (
            <div className="link-button">
              <Button
                size="small"
                variant="contained"
                color="inherit"
                startIcon={<GitHubIcon />}
              >
                <a
                  className="project-link"
                  href={project.backend}
                  target="_blank"
                  rel="noreferrer"
                >
                  Back-End Code
                </a>
              </Button>
            </div>
          )}
          {project.netlify && (
            <div className="link-button">
              <Button size="small" variant="contained" color="inherit">
                <a
                  className="project-link"
                  href={project.netlify}
                  target="_blank"
                  rel="noreferrer"
                >
                  Heroku
                </a>
              </Button>
            </div>
          )}
        </div>
        <br />
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </CardContent>
      <img src={project.image} className="project-photo" alt={project.title} />
    </Card>
  );
}

export default ProjectCard;
