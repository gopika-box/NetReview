import { useState } from "react";
import { useEffect } from "react";
import axios from "../../axios";
import YouTube from "react-youtube";
import {image_url, base_url, API_KEY } from "../../constants/constants";
// poster_path

const RowPost = (props) => {
  const [moviesList, setMovieList] = useState([]);
  const [url, setUrl] = useState('');
  useEffect(() => {
    axios.get(`${base_url+props.url}`).then((response) => {
      console.log(response.data.results)

      setMovieList(response.data.results)

      }).catch(() => {
        alert('Network Error')
      })

  },[])

  const handleMovieTrailer = (id) => {
    // console.log(id)
    axios.get(`${base_url}/movie/${id}/videos?api_key=${API_KEY}`).then((response) => {
      const trailer = response.data.results.find((video) => video.type === "Trailer");
      if (trailer) {
        setUrl(trailer.key);
      }
      
      // console.log(trailer)

    })
  }
 const handledetail = (id) => {
    window.location.href = `/details/${id}`;
  }
  return (
    <div>
        <h2 className="text-white ml-4 text-xl mt-2 font-medium">{props.title}</h2>
        <div className='posters flex gap-3 p-5 overflow-x-scroll scrollbar-none '>
          {moviesList.map((m)=>{
            return <img onDoubleClick={()=>{handledetail(m.id)}} onClick={()=>handleMovieTrailer(m.id)} className="w-40 h-60 rounded-lg hover:scale-110 transition-all duration-300" src={`${image_url+m.poster_path}`} alt="poster" />
          })}
        </div>
        {url &&
       <YouTube videoId={url} opts={{width:'100%', height:'390', playerVars:{autoplay:1}}} /> }
    </div>
  )
}

export default RowPost;
