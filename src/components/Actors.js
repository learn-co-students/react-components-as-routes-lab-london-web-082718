import React from 'react';
import { actors } from '../data';

const displayActors = (actor, idx) => {
  return(
    <div key={idx}>
      <h3>{actor.name}</h3>
      <ul>
        {
          actor.movies.map((movie, idx) => <li key={idx} >{movie}</li>)
        }
      </ul>
    </div>
  )
}

const Actors = () => 

    <div>
      <h1>Actors Page</h1>
      {
        actors.map((actor, idx) => displayActors(actor, idx))
      }
    </div>


export default Actors;
