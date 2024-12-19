import React from 'react';
import { motion } from 'framer-motion';

const CommunityCallToAction = () => (
  <div className="mt-16 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      className="inline-block"
    >
      <h3 className="text-2xl font-bold text-white mb-4">Ready to start cooking?</h3>
      <button className="bg-teal-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-teal-400 transition-colors">
        Join Now
      </button>
    </motion.div>
  </div>
);

export default CommunityCallToAction;