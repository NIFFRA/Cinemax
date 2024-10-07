import React from 'react';

const MovieCard = ({ movie }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-4 flex m-card ">
    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
      className="mb-4 rounded h-8 img-card"
    />
    <div className="font-bold text-xl mb-2 text-white">{movie.title}</div>
    <p className="text-white">{movie.overview}</p>
    <p className="text-white font-bold mt-2">Rating: {movie.vote_average}</p>
  </div>
);

export default MovieCard;
