// src/components/SkillPill.js
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import InfoPopup from './InfoPopup';

const SkillPill = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center bg-gray-800/50 border border-gray-700 text-gray-300 text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 cursor-pointer hover:bg-indigo-900/50 hover:text-white hover:border-indigo-700"
    >
      {skill.name}
      <AnimatePresence>
        {isHovered && <InfoPopup content={skill.description} />}
      </AnimatePresence>
    </div>
  );
};

export default SkillPill;