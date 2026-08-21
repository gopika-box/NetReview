import { useEffect, useState } from 'react';
import { API_KEY, image_url } from '../../constants/constants';
import axios from '../../axios';
import './Banner.css';
import { Navbar } from '../Navbar/Navbar';

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      const selectedMovie = response.data.results[0];
      setMovie(selectedMovie);

      // 1. Fixed key typo: 'myList' (capital L)
      const savedList = JSON.parse(localStorage.getItem('myList')) || [];
      const exists = savedList.some((item) => item.id === selectedMovie?.id);
      setIsSaved(exists);
    });
  }, []);

  const handleView = (id) => {
    window.location.href = `/details/${id}`;
  };

  const handleMyList = () => {
    if (!movie) return;
    let savedList = JSON.parse(localStorage.getItem('myList')) || [];

    if (isSaved) {
      // 2. Fixed filter condition: item.id !== movie.id to remove it
      savedList = savedList.filter((item) => item.id !== movie.id);
      setIsSaved(false);
    } else {
      savedList.push(movie);
      setIsSaved(true);
    }

    localStorage.setItem('myList', JSON.stringify(savedList));
  };

  return (
    <div
      className="banner h-125 relative"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%), url(${
          movie ? image_url + movie.backdrop_path : ''
        })`,
      }}
    >
      <div className="p-1">
        <Navbar />
        <div className="content ml-3 text-white absolute bottom-20 flex flex-col gap-3">
          <h1 className="title text-4xl font-bold">{movie ? movie.title || movie.name : ''}</h1>
          <div className="flex gap-3.5">
            <button
              onClick={() => handleView(movie?.id)}
              className="bg-gray-800/80 px-6 py-2 rounded-xl hover:bg-gray-800"
            >
              View
            </button>
            <button
              className="bg-white/80 text-black px-6 py-2 rounded-xl hover:bg-gray-100 cursor-pointer"
              onClick={handleMyList}
            >
              {isSaved ? 'Remove from list' : 'Add to List'}
            </button>
          </div>
          <h1 className="description max-w-md">{movie ? movie.overview : ''}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;