import React from 'react';
import { movies } from '../data';

const displayMovies = (movie, idx) => {
  return (
    <div key={idx} >
          <h3>{movie.title}</h3>
          <p>Moive Length: {movie.time}</p>
          <ul>
            {
              movie.genres.map((genre, idx) => <li key={idx} >{genre}</li>)
            }
          </ul>
    </div> 
  )
}


const Movies = () => 

  <div>
    <h1>Movies Page</h1>
    {movies.map((movie, idx) => displayMovies(movie, idx))}
  </div>
  

export default Movies;



