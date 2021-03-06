import { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import CountryCard from '../components/CountryCard';
import SearchIcon from '../icons/search.svg';
import SearchIconDark from '../icons/searchDark.svg';
import axios from 'axios';

function CountriesList(props) {

  const [ countries, setCountries ] = useState([]);
  const [ search, setSearch ] = useState('');
  const [ filter, setFilter ] = useState('');

  useEffect(async () => {
    axios({
      method: 'GET',
      url: 'https://restcountries.eu/rest/v2/all'
    }).then(res => {
      setCountries(res.data)
    })
  }, [])

  const searchingCountries = countries.filter( country => {
    return country.name.toLowerCase().includes( search.toLowerCase() )
  })

  const filterCountries = countries.filter( country => {
    return country.region.includes(filter)
  })

  // List of countries that match data from search bar and filter menu
  const countriesList = searchingCountries.filter(element => filterCountries.includes(element))
    
  return (
    <div className="countriesList">
      <div className="searchContainer">
        <img src={props.darkTheme ? SearchIcon : SearchIconDark} className={props.darkTheme ? "searchIcon" : "searchIconDark"} />
        <input className={props.darkTheme ? "searchBox" : "searchBoxDark"} type="search" name="search" placeholder="Search for a country..." onChange={ e => setSearch(e.target.value) } />
      </div>
      <br />
      <select className={props.darkTheme ? "select" : "selectDark"} onChange={ e => setFilter(e.target.value) }>
        <option value="" selected disabled hidden>Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <div className="flexDesktop">
        {countriesList.map(item => (
          <Link to={item.name.toLowerCase()} 
                style={{ textDecoration: 'none', color: 'black' }}>
            <CountryCard 
              flag={item.flag} 
              name={item.name} 
              population={item.population} 
              region={item.region} 
              capital={item.capital}
              darkTheme={props.darkTheme}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;