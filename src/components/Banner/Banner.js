import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import "./Banner.css"
function Banner() {
  const [movie, setMovie] =useState()
  useEffect(() =>{
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
      console.log(Response.data.results[0])
     setMovie(Response.data.results[Math.floor(Math.random()*Response.data.results.length -1)])
     
    })
  },[])
  return (
   
    <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path: ""})`}}>
       
     
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='babtn'>
                <button className='button'>Play</button>
                <button className='button'>Mylist</button>
            </div>
            <h1 className='descripton'> {movie ? movie.overview : ""}</h1>
        </div>
           <div className="fade_bottom">

           </div>
    </div>
  
  )
}

export default Banner
