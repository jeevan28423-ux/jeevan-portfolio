
import { motion } from 'motion/react';
import Button from '../components/Button';
import '../styles/contact.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get('name');
    const email = data.get('email');
    const subject = data.get('subject');
    const message = data.get('message');

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const mailto = `mailto:jeevan28423@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <section className="contact" id="contact">

      <motion.div
        className="contact-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="contact-label">GET IN TOUCH</p>

        <h2>
          Let's create something
          <br />
          <span>meaningful together.</span>
        </h2>
      </motion.div>

      <div className="contact-layout">

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3>Have an idea?</h3>

          <p>
            I'm always interested in exploring new ideas,
            collaborating on projects and connecting with
            people who love building things.
          </p>

          <div className="contact-details">

            <a href="mailto:jeevan28423@gmail.com">
              <span className="contact-icon">✉</span>
              jeevan28423@gmail.com
            </a>

            <a
              href="https://github.com/jeevan28423-ux"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon">⌘</span>
              GitHub
              <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/jeevan-a-06899a333"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon">in</span>
              LinkedIn
              <span>↗</span>
            </a>

          </div>

          <div className="contact-availability">
            <span className="availability-dot"></span>
            Open to opportunities and collaborations
          </div>

        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="form-group">
            <label htmlFor="contact-name">Your name</label>

            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">Email address</label>

            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-subject">Subject</label>

            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="What is this about?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Your message</label>

            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Tell me about your idea..."
              required
            />
          </div>

          <Button
            text="Send Message"
            type="submit"
            className="contact-submit"
          />

        </motion.form>

      </div>
    </section>
  );
}

export default Contact;
