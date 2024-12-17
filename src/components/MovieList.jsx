import React from 'react';

const MovieList = () => {
  const movies = [
    { title: "Movie Title", genre: "Action", image: "/movie3.jpg" },
    { title: "Another Movie", genre: "Comedy", image: "/movie2.jpg" },
  ];

  return (
    <section className="movie-list p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Recommended Movies</h2>
      <div className="movie-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="movie-card bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold text-white">{movie.title}</h3>
            <p className="text-sm text-gray-400">Genre: {movie.genre}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieList;