
import {
  motion,
  useMotionValue,
  useSpring
} from 'motion/react';

import SwapTextCard from '../components/SwapTextCard';
import Button from '../components/Button';

import '../styles/hero.css';

function Hero() {
  const frameX = useSpring(useMotionValue(0), {
    stiffness: 100,
    damping: 20
  });

  const frameY = useSpring(useMotionValue(0), {
    stiffness: 100,
    damping: 20
  });

  const imageX = useSpring(useMotionValue(0), {
    stiffness: 100,
    damping: 20
  });

  const imageY = useSpring(useMotionValue(0), {
    stiffness: 100,
    damping: 20
  });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    frameX.set(x * 14);
    frameY.set(y * 14);

    imageX.set(x * -5);
    imageY.set(y * -5);
  };

  const handleMouseLeave = () => {
    frameX.set(0);
    frameY.set(0);
    imageX.set(0);
    imageY.set(0);
  };

  return (
    <section className="hero" id="home">

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="hero-label">
          BCA STUDENT · ASPIRING DEVELOPER
        </p>

        <h1>
          Building ideas
          <br />
          into <span>digital experiences.</span>
        </h1>

        <p className="hero-description">
          I'm Jeevan, a computer applications student
          exploring web development and building
          projects one step at a time.
        </p>

        <div className="hero-swap-card">
          <SwapTextCard
            initialText="Curious by nature."
            finalText="Exploring technologies, experimenting with code and turning ideas into useful digital experiences."
          />
        </div>

        <div className="hero-buttons">

          <Button
            text="Explore My Work"
            href="#projects"
            className="hero-primary"
          />

          <a href="#contact" className="hero-secondary">
            Get in touch
          </a>

        </div>
      </motion.div>

      <motion.div
        className="hero-image"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <motion.div
          className="hero-image-frame"
          style={{ x: frameX, y: frameY }}
        />

        <motion.img
          src="/src/assets/hero.png"
          alt="Jeevan"
          style={{ x: imageX, y: imageY }}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </motion.div>

    </section>
  );
}

export default Hero;
