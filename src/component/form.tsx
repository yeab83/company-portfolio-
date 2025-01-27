import React from 'react';
import Button from './reusable';

const Form: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Name"
        className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-accent"
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-accent"
        required
      />
      <textarea
        placeholder="Message"
        className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-accent"
        rows={5}
        required
      ></textarea>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
