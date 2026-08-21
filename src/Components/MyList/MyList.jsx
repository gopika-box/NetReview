import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { image_url } from '../../constants/constants';

const MyList = () => {
  const [savedMovies, setSavedMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch items stored under 'myList'
    const list = JSON.parse(localStorage.getItem('myList')) || [];
    setSavedMovies(list);
  }, []);

  const handleRemove = (e, id) => {
    // Stop event bubbling so clicking "Remove" doesn't trigger navigate
    e.stopPropagation(); 
    
    const updatedList = savedMovies.filter((movie) => movie.id !== id);
    setSavedMovies(updatedList);
    localStorage.setItem('myList', JSON.stringify(updatedList));
  };

  const handleViewDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">My Saved List</h1>
        {savedMovies.length === 0 ? (
          <p className="text-gray-400">Your list is empty.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {savedMovies.map((movie) => (
              <div 
                key={movie.id} 
                onClick={() => handleViewDetails(movie.id)}
                className="relative group cursor-pointer"
              >
                <img
                  src={movie.poster_path ? `${image_url}${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'}
                  alt={movie.title || movie.name || 'Movie Poster'}
                  className="rounded-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
                <p className="text-sm font-semibold mt-2 truncate">{movie.title || movie.name}</p>
                <button
                  onClick={(e) => handleRemove(e, movie.id)}
                  className="mt-2 bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded w-full cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyList;