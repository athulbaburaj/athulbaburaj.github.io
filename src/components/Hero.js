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

        {/* Line 1 — clip reveal */}
        <motion.div variants={itemVariants} className="overflow-hidden">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, ease: EXPO_OUT, delay: 0.05 }}
            className="font-hero text-[clamp(1.5rem,3vw,2.5rem)] text-primary leading-[0.9]"
          >
            CLOSEST TO
          </motion.h1>
        </motion.div>

        {/* Line 2 — clip reveal */}
        <motion.div variants={itemVariants} className="overflow-hidden flex items-baseline gap-3">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, ease: EXPO_OUT, delay: 0.15 }}
            className="font-hero text-[clamp(1.5rem,3vw,2.5rem)] text-primary leading-[0.9]"
          >
            THE PROBLEM
          </motion.h1>
          <motion.span
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, ease: EXPO_OUT, delay: 0.22 }}
            className="font-hero text-[clamp(1.5rem,3vw,2.5rem)] text-muted leading-[0.9]"
          >
            .
          </motion.span>
        </motion.div>

        {/* Identity stripe */}
        <motion.div
          variants={itemVariants}
          className="h-px bg-hairline w-full mt-6 mb-6"
        />

        {/* Description + CTAs */}
        <motion.div className="flex flex-col md:flex-row md:items-center justify-between gap-10">

          {/* Description */}
          <motion.div variants={itemVariants} className="max-w-md measure">
            <p className="text-base text-secondary font-normal leading-relaxed">
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
              className="group inline-flex w-fit items-center gap-2 text-sm font-bold tracking-widest uppercase
                         text-primary underline decoration-faint underline-offset-4
                         hover:text-accent hover:decoration-accent transition-colors duration-300"
            >
              <span>View Work</span>
              <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-2 text-sm font-bold tracking-widest uppercase
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
