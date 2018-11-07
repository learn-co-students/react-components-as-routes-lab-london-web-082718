import React from 'react';
import { movies } from '../data';


const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
          <div key={index}>
          {/* {define the key term in here and include in the mapping when creating new HTML elements / tags} */}
              <h3>Name: {movie.title}</h3>
              <p>Time: {movie.time}</p>
              <p>Genres:</p>
              <ul>
                {movie.genres.map((genre, index) => (
                  // use index when items don't have stable ids
                  // https://reactjs.org/docs/lists-and-keys.html
                    <li key={index}>{genre}</li>
                ))}
              </ul>
          </div>
      ))}
    </div>
  );
};

export default Movies;
