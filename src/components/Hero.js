// src/components/Hero.js
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { heroContainerVariants as containerVariants, heroItemVariants as itemVariants } from '../constants/animations';

// Expo-out bezier — fast start, gentle settle. The premium reveal curve.
const EXPO_OUT = [0.16, 1, 0.3, 1];

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex flex-col gap-6 pt-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Main heading block */}
      <div className="flex flex-col">

        {/* Identity line — the first thing a cold visitor needs, and it puts the
            name and role in the crawler's path before the positioning statement. */}
        <motion.p
          variants={itemVariants}
          className="font-mono t-label font-medium tracking-[0.28em] uppercase text-muted mb-4"
        >
          Athul Baburaj · Cloud Solutions Engineer
        </motion.p>

        {/*
          ONE h1 for the whole statement. It previously split across two <h1>
          elements, so the page's heading read as the fragments "CLOSEST TO" and
          "THE PROBLEM". The clip reveal now animates inner spans instead, which
          keeps the effect identical while leaving a single semantic heading.
        */}
        <h1 className="font-hero t-h1 text-primary leading-[0.9]">
          <motion.span variants={itemVariants} className="block overflow-hidden">
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: EXPO_OUT, delay: 0.05 }}
              className="block"
            >
              CLOSEST TO
            </motion.span>
          </motion.span>

          <motion.span variants={itemVariants} className="block overflow-hidden">
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: EXPO_OUT, delay: 0.15 }}
              className="block"
            >
              THE PROBLEM<span className="text-muted">.</span>
            </motion.span>
          </motion.span>
        </h1>

        {/* Identity stripe */}
        <motion.div
          variants={itemVariants}
          className="h-px bg-hairline w-full mt-6 mb-6"
        />

        {/* Description + CTAs */}
        <motion.div className="flex flex-col md:flex-row md:items-center justify-between gap-10">

          {/* Description */}
          <motion.div variants={itemVariants} className="max-w-md measure">
            <p className="t-lead text-secondary font-normal leading-relaxed">
              I embed with the teams that{' '}
              <span className="text-primary font-bold">own the problem</span>
              {' '}— and build until it's{' '}
              <span className="text-primary font-bold">in production</span>
              . Currently Cloud Solutions Engineer at American Express.
            </p>
          </motion.div>

          {/* CTAs — plain text links, underlined, accent only on hover */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3 min-w-[200px]">
            <Link
              to="/projects"
              className="group inline-flex w-fit items-center gap-2 t-body font-bold tracking-widest uppercase
                         text-primary underline decoration-faint underline-offset-4
                         hover:text-accent hover:decoration-accent transition-colors duration-300"
            >
              <span>View Work</span>
              <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-2 t-body font-bold tracking-widest uppercase
                         text-secondary underline decoration-faint underline-offset-4
                         hover:text-accent hover:decoration-accent transition-colors duration-300"
            >
              <span>Let's Talk</span>
              <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </Link>
          </motion.div>

        </motion.div>
      </div>


    </motion.section>
  );
};

export default Hero;
