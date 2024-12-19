import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface CommunityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ icon: Icon, title, description, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-teal-500 transition-colors"
  >
    <Icon className="w-12 h-12 text-teal-500 mb-4" />
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.a>
);

export default CommunityCard;