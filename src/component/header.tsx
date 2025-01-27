import React from 'react';

const Header: React.FC = () => (
  <header className="bg-primary text-white px-6 py-4 flex justify-between items-center">
    <h1 className="text-lg font-bold">Company Name</h1>
    <nav>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:text-accent">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-accent">
            About Us
          </a>
        </li>
        <li>
          <a href="/portfolio" className="hover:text-accent">
            Portfolio
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-accent">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
