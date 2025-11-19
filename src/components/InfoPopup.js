// src/components/InfoPopup.js
import React from 'react';
import { motion } from 'framer-motion';

const InfoPopup = ({ content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-xl p-4 text-xs text-left text-gray-300 z-20"
    >
      {content}
    </motion.div>
  );
};

export default InfoPopup;