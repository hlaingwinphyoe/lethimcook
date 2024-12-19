import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => (
  <div>
    <h3 className="text-white font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {children}
    </ul>
  </div>
);

export default FooterSection;