import { Switch, Route,BrowserRouter as Router } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import './App.css';

function App() {

  return(
    <div className="App">
      <div className="homepageHeader">
        <div className="appTitle">Where in the world?</div>
        <div className="themeChangeButton">Dark Mode</div>
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
