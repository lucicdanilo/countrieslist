import { useState, useEffect } from 'react';
import CountriesList from './components/CountriesList';
import './App.css';

function App() {

  return(
    <div className="App">
      <div className="homepageHeader">
        <div className="appTitle">Where in the world?</div>
        <div className="themeChangeButton">Dark Mode</div>
      </div>
      <CountriesList />
    </div>
  );
}

export default App;
