import { useState, useEffect } from 'react';
import CountriesList from './components/CountriesList';

function App() {

  return(
    <div>
      <div>
        <div>Where in the world?</div>
        <button>Dark Mode</button>
      </div>
      <CountriesList />
    </div>
  );
}

export default App;
