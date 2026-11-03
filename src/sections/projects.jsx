
import { motion } from 'motion/react';
import projects from '../data/projects';
import Button from '../components/Button';
import '../styles/projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-heading">
        <p className="projects-label">SELECTED WORK</p>

        <h2>
          Things I've
          <br />
          <span>been building.</span>
        </h2>

        <p className="projects-intro">
          A selection of projects I've worked on while
          exploring web development.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            className="project-card-shell"
            key={project.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >

            <article className="project-card">

              <div className="project-top">
                <span>
                  {project.number} / {String(projects.length).padStart(2, '0')}
                </span>

                <span>{project.category}</span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {project.link && (
                <div className="project-actions">
                  <Button
                    text="View Project"
                    href={project.link}
                    className="project-link"
                  />
                </div>
              )}

            </article>

          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Projects;
