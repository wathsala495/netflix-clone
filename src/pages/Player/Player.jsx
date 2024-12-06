import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from  '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {
  const {id}=useParams()
  const navigate=useNavigate();
   const [apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    type:""
   })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDA4YjhkNmY0MGNiMTExNjFkYjdmN2FkYmQwOGYwMCIsIm5iZiI6MTczMzQ2Njk0MC44NDQsInN1YiI6IjY3NTI5YjNjYWI2Y2MzYTRjOGZjN2RlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IT0Exk9tPOCJvaokZoF9MjeWyE-lQpkGB0vqjDIzF-w'
    }
  };
  useEffect(()=>{
      
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));


  },[])
  

  return (
    <div className='player h-screen flex flex-col justify-center items-center'>
       <img src={back_arrow_icon} alt="" className='absolute top-[20px] left-[20px] w-[50px] cursor-pointer' onClick={()=>navigate(-2)}/>
       <iframe className='rounded-[10px]' src={`https://www.youtube.com/embed/${apiData.key}`} frameborder="0" width='90%' height='90%'
       title='trailer' allowFullScreen>
          </iframe>
   <div className="player-info flex items-center justify-between w-[90%]" >
    <p>{apiData.published_at.slice(0,10)}</p>
    <p>{apiData.name}</p>
    <p>{apiData.type}</p>
   </div>
     
    </div>
  )
}

export default Player
