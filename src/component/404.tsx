import React from 'react';

const NotFound: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-6xl font-bold text-gray-800">404</h1>
    <p className="text-lg text-gray-600 mt-4">Page Not Found</p>
    <a href="/" className="text-accent mt-4 hover:underline">
      Go Back Home
    </a>
  </div>
);

export default NotFound;
