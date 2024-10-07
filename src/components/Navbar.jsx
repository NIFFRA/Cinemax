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


    </nav>
  );
};

export default Navbar;
