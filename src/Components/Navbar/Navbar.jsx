
import './Navbar.css'
import netlogo from '../../assests/netlogo.png'
import { IoSearchSharp } from "react-icons/io5";
import { useState } from 'react';
import axios from 'axios';
import { base_url, API_KEY } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



export const Navbar = () => {
  const [search, setSearch] = useState(''); 
    const navigate= useNavigate();

  const getInput = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value.trim())
  }

  const onSubmit = (e) => {
    {search && navigate(`/search/${search}`)}
    // navigate(`/search/${search}`);
    

    // e.preventDefault();
    // console.log("Form Submitted")
    // console.log(search)
    // axios.get(`${base_url}/search/movie?api_key=${API_KEY}&query=${search}`).then((response) => {
    //   console.log(response.data.results)
    // })


  }

 
  
  return (
    <div className='navbar h-16 justify-between pt-4'>
        <div className='flex justify-between items-center px-2'>
          <Link to='/'>
        <img className='logo w-28 aspect-auto' src={netlogo} alt="netflix logo " /></Link>
        <div className='flex'>

          {/* search */}
        <button onClick={() => navigate('/mylist')} className='bg-gray-200 rounded px-2 font-semibold mr-2'>View List</button>
        <span className='flex items-center bg-black/40  mr-2 rounded'>

        <input type="text" name='search' placeholder='Search' onChange={getInput}className=' bg-black/40 placeholder-gray-300 focus:outline-none border-none text-white px-1'/>

        <button onClick={onSubmit} className='p-2 bg-red-900 text-white rounded cursor-pointer'><IoSearchSharp/></button> 
        </span>

        <img className='avatar w-7' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
          </div>
           </div>
      

    </div>
  )
}
