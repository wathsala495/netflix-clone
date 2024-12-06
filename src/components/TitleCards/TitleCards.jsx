import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const TitleCards = ({title,category}) => {


const cardsRef=useRef();
const [apiData,setApiData]=useState([])

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDA4YjhkNmY0MGNiMTExNjFkYjdmN2FkYmQwOGYwMCIsIm5iZiI6MTczMzQ2Njk0MC44NDQsInN1YiI6IjY3NTI5YjNjYWI2Y2MzYTRjOGZjN2RlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IT0Exk9tPOCJvaokZoF9MjeWyE-lQpkGB0vqjDIzF-w'
  }
};



const handleWheel=(event)=>{
   event.preventDefault();
   cardsRef.current.scrollleft +=event.deltaY;
}

useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  cardsRef.current.addEventListener('wheel',handleWheel);
})
  return (
    <div className='title-cards max:[800px]-mt-[20px] max:[800px]-mb-[0px] mt-[50px] mb-[30px] '>
      <h2 className='mb-[8px] max:[800px]-text-[20px] max:[500px]-text-[15px]'>{title?title:"Popular on netflix"}</h2>
      <div className="card-list flex gap-[10px] overflow-x-scroll" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return(
            <Link to={`/player/${card.id}`} className='card relative' key={index} >
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" className='w-[240px] rounded-[4px] cursor-pointer max:[800px]-w-[200px] max:[500px]-w-[165 px]'/>
              <p className='absolute bottom-[10px] right-[10px] max:[800px]-text-[12px] max:[500px]-mt-[10px]'>{card.original_title}</p>
            </Link >

          )
        })}
      </div>
    </div>
  )
}

export default TitleCards
// 1:03
