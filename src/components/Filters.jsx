import React from 'react';

const Filters = () => (
  <section className="filters sticky top-0 bg-gray-900 p-4">
    <label htmlFor="genre" className="text-white mr-4">Filter by Genre:</label>
    <select id="genre" className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none">
      <option value="action">Action</option>
      <option value="comedy">Comedy</option>
      <option value="drama">Drama</option>
      <option value="horror">Horror</option>
    </select>
  </section>
);

export default Filters;