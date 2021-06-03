import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WeatherDescription from './WeatherDescription';

import '../style.css';

import Weather from './Weather';

const App = () => {

  return (
    <Router>
      <div className="container-fluid">
        <Route path='/' exact component = { Weather } />
        <Route path='/forecast'  component = { WeatherDescription } />
      </div>
    </Router>
  );
};

export default App;
