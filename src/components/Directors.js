import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
       <div>
          <h1>Directors Page</h1>
          {directors.map((director, index) => (
          <div key={index}>
              <h3>Name: {director.name}</h3>
              <p>Movies:</p>
              <ul>
                {director.movies.map((movie, index) => (
                  // use index when items don't have stable ids
                    // https://reactjs.org/docs/lists-and-keys.html
                <li key={index}>{movie}</li>
                ))}
              </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Directors


