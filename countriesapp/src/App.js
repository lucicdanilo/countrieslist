import { useEffect, useState } from 'react';
import { Switch, Route,BrowserRouter as Router } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import './App.css';
import Moon from './icons/moon-regular.svg';

function App() {

  const [ theme, setTheme ] = useState(getSavedTheme);

  let toggleTheme = () => (
    setTheme(toggleTheme => !toggleTheme)
  )

  // Storing theme in local storage..
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  },[theme])

  function getSavedTheme(){
    const savedTheme = JSON.parse(localStorage.getItem('theme'));
    return savedTheme || false;
  }

  console.log(theme);
  
  return(
    <div className={theme ? "app lightTheme" : "app darkTheme"}>
      <div className="homepageHeader">
        <div className="appTitle">Where in the world?</div>
        <div className="themeChangeButton" onClick={toggleTheme}><img src={Moon} className="moonIcon"/>Dark Mode</div>
      </div>
      <Router>
        <Switch>
          <Route exact path='/' component={CountriesList} />
          <Route path='/:country' component={CountryDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
