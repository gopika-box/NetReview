
import './App.css'
import { action_movies, comedy_movies, documentaries_movies, horror_movies, popular_movies, romance_movies } from './urls.js'
// import axios from 'axios'
import Banner from './Components/Banner/Banner'

import RowPost from './Components/RowPost/RowPost'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { Searchlist } from './Components/SearchList/Searchlist.jsx'
import ViewDetails from './Components/ViewDetails/ViewDetails.jsx'
import MyList from './Components/MyList/MyList.jsx'


function App() {
  // const [state,setState]= useState([])


  return ( <BrowserRouter>
    <Routes>
      <Route path='/' element={

            <>
          <Banner/>
          <RowPost title="Trending Now" url={popular_movies}/>
          <RowPost title='Action' url={action_movies}/>
          <RowPost title='Comedy' url={comedy_movies}/>
          <RowPost title='Horror' url={horror_movies}/>
          <RowPost title='Romance' url={romance_movies}/>
          <RowPost title='Documentaries' url={documentaries_movies}/>
          </>  }/>
    <Route path='/search/:search' element={<Searchlist/>}/>
    <Route path='/details/:movieId' element={<ViewDetails/>}/>
    <Route path='/mylist' element={<MyList/>}/>


    </Routes>
    
    </BrowserRouter>
   
  
  )
}

export default App;
