import { motion } from 'motion/react';
import skills from '../data/skills';
import '../styles/skills.css';

import htmlLogo from '../assets/skills/HTML.png';
import cssLogo from '../assets/skills/CSS.png';
import javascriptLogo from '../assets/skills/js.webp';
import reactLogo from '../assets/skills/react.png';
import nodeLogo from '../assets/skills/nodejs.png';

import gitLogo from '../assets/skills/git.png';
import githubLogo from '../assets/skills/github.png';
import vscodeLogo from '../assets/skills/vscode.png';

const logoMap = {
  HTML: htmlLogo,
  CSS: cssLogo,
  JavaScript: javascriptLogo,
  React: reactLogo,
  Node: nodeLogo,
  'Node.js': nodeLogo,
  Git: gitLogo,
  GitHub: githubLogo,
  'VS Code': vscodeLogo,
};

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="skills-heading">
        <p className="skills-label">MY TOOLKIT</p>
        <h2>
          Technologies I use to
          <br />
          <span>bring ideas to life.</span>
        </h2>
      </div>

      <div className="skills-list">
        {skills.map((group, index) => (
          <motion.div
            className="skill-row"
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{group.category}</h3>

            <div className="skill-technologies">
              {group.technologies.map((technology) => (
                <div className="skill-item" key={technology}>
                  <div className="skill-shine"></div>

                  <div className="skill-item-content">
                    {logoMap[technology] && (
                      <img
                        src={logoMap[technology]}
                        alt={`${technology} logo`}
                      />
                    )}

                    <span>{technology}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Skills;