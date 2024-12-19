import React from 'react';
import { motion } from 'framer-motion';
import CommunityCard from './CommunityCard';
import { communityLinks } from './communityData';

const CommunityGrid = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
  >
    {communityLinks.map((item) => (
      <CommunityCard key={item.title} {...item} />
    ))}
  </motion.div>
);

export default CommunityGrid;