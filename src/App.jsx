 import React, { useEffect,useState } from 'react'
 import Search from './Component/Search.jsx'
 const API_BASE_URL ='https://api.themoviedb.org/3';
 const API_KEY= import.meta.VITE_TMDB_API_KEY;
 export const App = () => {
  const[searchTerm,setsearchTerm]=useState('');
  useEffect(()=>{ },[]);
   return (
     <main className='hero'>
      <div  className='patter'/>
    <div className='wrapper'>
      <header>
        <img src="./hero-img.svg" alt="Hero Banner" />
        <h1> Find <span className="text-gradient">Movies</span> you'll Enjoy with out the Hassle 
       </h1>

     
      </header>
           <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm}/>
           <h1 className='text-white'>{searchTerm}</h1>
    </div>
     </main  >
   )
 }
 
 export default App