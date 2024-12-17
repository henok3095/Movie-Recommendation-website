import React from 'react';

const Hero = () => (
  <section
    className="hero relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
    style={{ backgroundImage: "url('/wallpaper2.jpg')" }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    <div className="relative z-10">
      <h1 className="text-5xl font-bold text-white mb-4">
        <span className="animated-text">Discover Movies</span>
        <br />
        <span className="text-pink-400">You'll Love</span>
      </h1>
      <div className="search flex mt-6 space-x-4">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-3/4 max-w-lg px-4 py-3 rounded-full bg-white text-gray-800 shadow-md focus:outline-none focus:shadow-lg"
        />
        <button className="px-6 py-3 rounded-full bg-pink-400 text-white hover:bg-pink-500 shadow-md">
          Search
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
