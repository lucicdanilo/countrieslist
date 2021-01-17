import { useEffect, useState } from 'react';
import { Switch, Route,BrowserRouter as Router } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import './App.css';
import Moon from './icons/moon-regular.svg';
import MoonDark from './icons/moon-solid.svg';

function App() {

  const [ darkTheme, setDarkTheme ] = useState(getSavedTheme);

  let toggleTheme = () => (
    setDarkTheme(toggleTheme => !toggleTheme)
  )

  // Storing theme in local storage..
  useEffect(() => {
    localStorage.setItem('darkTheme', JSON.stringify(darkTheme));
  },[darkTheme])

  function getSavedTheme(){
    const savedTheme = JSON.parse(localStorage.getItem('darkTheme'));
    return savedTheme || false;
  }
  
  return(
    <div className={darkTheme ? "app lightTheme" : "app darkTheme"}>
      <div className="homepageHeader">
        <div className="appTitle">Where in the world?</div>
        <div className="themeChangeButton" onClick={toggleTheme}><img src={darkTheme ? Moon : MoonDark} className="moonIcon"/>Dark Mode</div>
      </div>
      <Router>
        <Switch>
          <Route exact path='/'><CountriesList darkTheme={darkTheme} /></Route>
          <Route path='/:country'><CountryDetails darkTheme={darkTheme} /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
