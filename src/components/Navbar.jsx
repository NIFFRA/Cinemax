import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ genres }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <h1 className="text-2xl font-bold">
        <a href="/">Movie Library</a>
      </h1>

      {/* <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          className="px-4 py-2 rounded-l text-black"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 px-4 py-2 rounded-r text-white"
        >
          Search
        </button>
      </form> */}
    </nav>
  );
};

export default Navbar;
