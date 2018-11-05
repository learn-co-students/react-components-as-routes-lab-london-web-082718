import React from 'react';
import { directors } from '../data';

const displayDirectors = (director, idx) => {
  return (
    <div key={idx}>
      <h3>{director.name}</h3>
      <ul>
        {
          director.movies.map((movie, idx) => <li key={idx} >{movie}</li>)
        }
      </ul>
    </div>
  )
}

const Directors = () => 

    <div>
      <h1>Directors Page</h1>
      {directors.map((director, idx) => displayDirectors(director, idx))}
    </div>



export default Directors
