 import React, { useState } from 'react'
 import Search from './Component/Search.jsx'
 export const App = () => {
  const[searchTerm,setsearchTerm]=useState('');
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