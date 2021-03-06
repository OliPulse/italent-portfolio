import React from "react"
import projects from "../data/projects"
import { ProjectLink } from "./atoms"

const ProjectGrid = ({ showHeading }) => {
  return (
    <section className="">
      {showHeading && (
        <h2 >
          PROJECTS
        </h2>
      )}
      <ul >
        {projects.map(project => {
          return (
            <li
              key={project.title}
              
            >
              <div className="flex justify-between space-x-3 sm:space-x-0 pb-10">
                <div>
                  <h3 className="text-xl font-semibold text-primary group-hover:text-accent">
                    <a
                      href={project.slug}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <h4 className="font-base text-tertiary pr-3">
                    {project.description}
                  </h4>
                  <div className="flex items-center justify-start space-x-4 absolute bottom-0 mb-5">
                    {project.links.map(link => {
                      return (
                        <ProjectLink
                          key={link.url}
                          label={link.label}
                          url={link.url}
                        />
                      )
                    })}
                  </div>
                </div>
                <span className="mt-1 text-sm sm:text-base text-tertiary">
                  {project.year}
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ProjectGrid
