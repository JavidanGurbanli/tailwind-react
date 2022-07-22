import { orange } from '@mui/material/colors';
import React from 'react'
import "./Movie.css";
const Movie = ({title,poster_path,overview,vote_average}) => {
   const image_path = "https://image.tmdb.org/t/p/w1280";
   const setVote = (vote) => {
    if(vote >= 8){
        return "green";
    }
    else if (vote >= 6){
        return "orange";
    }
    else
       return "red";
   }
  return (
    <div className="movie">
      <img src={image_path + poster_path} alt={title}/>
      <div className="info">
        <h4>{title}</h4>
        <p className={setVote(vote_average)}>{vote_average}</p>
      </div>
      <div className="over">
        <p>Overview:</p>
        <h5>{overview}</h5>
      </div>
    </div>
  )
}

export default Movie