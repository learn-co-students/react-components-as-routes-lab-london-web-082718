import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// import ReactDOM from 'react-dom';


import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route path="/" render={Home} />
        <Route path="/movies" render={Movies} />
        <Route path="/directors" render={Directors} />
        <Route path="/actors" render={Actors} />
      </div>
    </Router>
  );
};

export default App
