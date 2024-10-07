import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const API_KEY = 'YOUR_API_KEY';

const GenrePage = () => {
  const { genreId } = useParams();
  const [movies, setMovies] = useState([]);
  const [genreName, setGenreName] = useState('');

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
        );
        setMovies(response.data.results);
    
        const genreList = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
        );
        const genre = genreList.data.genres.find((g) => g.id === parseInt(genreId));
        setGenreName(genre ? genre.name : 'Genre');
      } catch (error) {
        console.error('Error fetching movies by genre:', error);
      }
    };

    fetchMoviesByGenre();
  }, [genreId]);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl text-white font-bold mb-6">{genreName} Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default GenrePage;
