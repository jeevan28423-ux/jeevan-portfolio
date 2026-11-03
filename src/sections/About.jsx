
import { motion } from 'motion/react';
import Terminal from '../components/Terminal';
import '../styles/About.css';

function About() {
  return (
    <section className="about" id="about">

      <motion.div
        className="about-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="about-label">A LITTLE ABOUT ME</p>

        <h2>
          Curious by nature.
          <br />
          <span>Driven by creation.</span>
        </h2>
      </motion.div>

      <div className="about-layout">

        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Terminal />
        </motion.div>

        <div className="about-content">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            I'm Jeevan, a BCA student with an interest in
            web development and technology.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            I enjoy turning ideas into working digital
            experiences, exploring new technologies and
            improving my skills through hands-on projects.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            My focus is on learning, experimenting and
            building things that solve real problems.
          </motion.p>

          <motion.div
            className="about-focus"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className="focus-dot"></span>
            <p>
              Currently focused on learning and building with React.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
