import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const API_KEY = '770f85ea32046a7e3bdc38bef60100e6';
const POPULAR_MOVIES_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(POPULAR_MOVIES_API_URL);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl text-white font-bold mb-6">Popular Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-row list-container ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;




