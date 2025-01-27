import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-secondary text-white text-center py-4">
    <p className="mb-2">© {new Date().getFullYear()} Company Name</p>
    <div className="flex justify-center space-x-4">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent"
      >
        Facebook
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent"
      >
        Twitter
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent"
      >
        LinkedIn
      </a>
    </div>
  </footer>
);

export default Footer;
