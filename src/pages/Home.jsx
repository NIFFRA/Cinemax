import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const API_KEY = '770f85ea32046a7e3bdc38bef60100e6';
const POPULAR_MOVIES_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const SEARCH_MOVIE_API_URL = (query) =>
  `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(POPULAR_MOVIES_API_URL);
        setMovies(response.data.results);
      } catch (error) {
        setErrorMessage('Error fetching popular movies. Please try again later.');
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!searchTerm) {
      setMovies([]);
      setErrorMessage('Please enter a movie name to search.');
      return;
    }

    try {
      const response = await axios.get(SEARCH_MOVIE_API_URL(searchTerm));
      if (response.data.results.length > 0) {
        setMovies(response.data.results);
        setErrorMessage('');
      } else {
        setMovies([]);
        setErrorMessage('No movies found matching your search.');
      }
    } catch (error) {
      setErrorMessage('Error searching for movies. Please try again later.');
      console.error('Error searching for movies:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
     
      <form onSubmit={handleSearch} className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a movie..."
          className="p-2 rounded border border-gray-300"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-row list-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
