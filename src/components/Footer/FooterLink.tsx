import React from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-teal-500 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default FooterLink;