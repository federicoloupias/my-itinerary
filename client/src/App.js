import React from 'react';
import Home from './component/Home'; 
import CitiesList from './component/CitiesList'
import Itinerary from './component/Itinerary'

import { Provider } from 'react-redux';
import store from './store';

import Carousel from './component/Carousel.jsx'
import './App.css';


function App() {
  return (
      <div className="App">
        <Home />
        
      </div>
    
  );
}

export default App;
