import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = '770f85ea32046a7e3bdc38bef60100e6';

const MovieCard = ({ movie }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&append_to_response=credits`);
        setDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchDetails();
  }, [movie.id]);

  if (!details) {
    return <div>Loading...</div>; // Optional loading state
  }

  const genres = details.genres.map((genre) => genre.name).join(', ');
  const topCast = details.credits.cast.slice(0, 3).map((actor) => `${actor.name} as ${actor.character}`).join(', ');

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-4  m-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="mb-4 rounded h-8 img-card"
      />

      <div>
        <div className="font-bold text-xl mb-2 text-white"> <b>{movie.title}</b></div>
        {/* <p className="text-white">{movie.overview}</p> */}
        <p className="text-white font-bold mt-2"><em>Rating:</em> {movie.vote_average}</p>
        <p className="text-white mt-2"><em>Genres:</em> {genres}</p>
        <p className="text-white mt-2"><em>Cast:</em> {topCast}</p>
      </div>
    </div>
  );
};

export default MovieCard;
