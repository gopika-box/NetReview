import { useEffect, useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_KEY, base_url } from '../../constants/constants';

const ViewDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isSaved,setIsSaved] = useState(false)
  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(`${base_url}/movie/${movieId}?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response.data);
        setMovie(response.data); 

        const savedList = JSON.parse(localStorage.getItem('myList'))||[]
        const exists= savedList.some((item)=> item.id === movie.id);
        setIsSaved(exists)
     
     
      })
      .catch((err) => console.error(err));
  }, [movieId]); 

  const handleMyList=()=>{
    if(!movie) return;
    let savedList = JSON.parse(localStorage.getItem('myList'))||[]

    const exists = savedList.some((item)=> item.id === movie.id)
    if (isSaved ||exists){
      savedList=savedList.filter((item)=>item.id === movie.id)
      // setIsSaved(false)
    }
    else{
      savedList.push(movie);
      setIsSaved(true)
    }
    localStorage.setItem('myList',JSON.stringify(savedList))
  }

  if (!movie) {
    return (
      <div>
        <Navbar />
        <div className="text-white p-10 bg-slate-900 min-h-screen">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="text-white px-8 py-10 bg-slate-900 min-h-screen">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row">
          {/* Poster */}
          <div className="w-full shrink-0 md:w-80">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-2xl shadow-xl"
            />
            <button
              onClick={handleMyList}
              className={`w-full py-3 px-6 rounded-xl font-semibold transition-all cursor-pointer mt-3 ${
                isSaved
                  ? 'bg-gray-700 text-white hover:bg-gray-700'
                  : 'bg-white text-black hover:bg-gray-200'
              }`}
            >
              {isSaved ? 'Added to list' : 'Add to My List'}
            </button>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-4 w-full">
            <div>
              <h1 className="flex items-center gap-4 text-amber-400 text-4xl font-bold">
                {movie.title}
              </h1>

              <ul className="flex flex-wrap gap-5 font-light tracking-wide mt-2 text-sm text-gray-300">
                <li>📅 Release Date: {movie.release_date}</li>
                <li>⌛ Runtime: {movie.runtime} min</li>
                <li>⭐ Rating: {movie.vote_average}/10 ({movie.vote_count} votes)</li>
                <li>💰 Budget: ${movie.budget?.toLocaleString()}</li>
                <li>💵 Revenue: ${movie.revenue?.toLocaleString()}</li>
              </ul>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 my-2">
              {movie.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="rounded-full bg-slate-800 border border-slate-700 px-3 py-1 text-xs text-gray-300"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Overview */}
            <div>
              <h3 className="mb-1 text-lg font-semibold text-amber-300">Overview</h3>
              <p className="leading-relaxed text-gray-300">{movie.overview}</p>
            </div>

            {/* Production Info */}
            <div className="mt-2 grid grid-cols-1 gap-2 border-t border-gray-800 pt-4 text-sm text-gray-300 sm:grid-cols-2">
              <p>
                <strong className="text-white">Language:</strong>{" "}
                {movie.spoken_languages?.map((lang) => lang.english_name).join(", ")}
              </p>
              <p>
                <strong className="text-white">Country:</strong>{" "}
                {movie.production_countries?.map((c) => c.name).join(", ")}
              </p>
              <p>
                <strong className="text-white">Companies:</strong>{" "}
                {movie.production_companies?.map((c) => c.name).join(", ")}
              </p>
              <p>
                <strong className="text-white">Tagline:</strong> {movie.tagline}
              </p>
              <p>
                <strong className="text-white">Homepage:</strong>{" "}
                <a
                  href={movie.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline"
                >
                  {movie.homepage}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;