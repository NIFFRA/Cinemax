import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const API_KEY = '770f85ea32046a7e3bdc38bef60100e6';

const SearchResultsPage = () => {
    console.log("search");
  const { query } = useParams();
    const [movies, setMovies] = useState([]);
    console.log(query);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl text-white font-bold mb-6">Search Results for "{query}"</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 list-container">
        {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
            
        ))}
              
              
          </div>
          <br>
              </br>
              <h2 className='text-center'>End of Search</h2>
    </div>
  );
};

export default SearchResultsPage;
