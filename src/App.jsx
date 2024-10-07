import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Genre from './pages/Genre';
import Search from './pages/Search';

const API_KEY = '770f85ea32046a7e3bdc38bef60100e6';
const GENRE_API_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;



const App = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(GENRE_API_URL);
        setGenres(response.data.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <Router>
      <Navbar genres={genres} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genre/:genreId" element={<Genre />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;






