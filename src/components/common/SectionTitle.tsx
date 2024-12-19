import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
    <p className="text-gray-400 text-lg">{subtitle}</p>
  </motion.div>
);

export default SectionTitle;