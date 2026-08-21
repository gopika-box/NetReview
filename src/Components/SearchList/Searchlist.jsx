import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY, base_url, image_url } from '../../constants/constants';
import { Navbar } from '../Navbar/Navbar';

export const Searchlist = () => {
    const {search}= useParams();
    const navigate= useNavigate();
    const [searchResults, setSearchResults]= useState([])
    useEffect(() => {
        axios.get(`${base_url}/search/movie?api_key=${API_KEY}&query=${search}`).then((response)=>{
            // console.log(response.data.results)
            setSearchResults(response.data.results)
        })

    },[search])
    const getinfo = (id)=>{
      console.log(id)
      navigate(`/details/${id}`)
    }
  return (
      <div>
        <Navbar/>
        <h2 className="text-white ml-4 text-xl mt-2 font-medium">Results for : {search}</h2>
        <div className='ml-3 flex items-center justify-center'>

      
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6  gap-3 mt-5'>
            {searchResults.map((m)=>{
              console.log(m.id)
            return <img onClick={()=>getinfo(m.id)} className="w-full h-auto object-cover rounded-lg hover:scale-110 transition-all duration-300" src={`${image_url+m.poster_path}`} alt="poster" />
          })}

        </div>
          </div>
        
        {/* {url &&
       <YouTube videoId={url} opts={{width:'100%', height:'390', playerVars:{autoplay:1}}} /> } */}
    </div>
    
    
  )
}
