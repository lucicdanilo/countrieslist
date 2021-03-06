import { useState, useEffect } from 'react'; 
import CountryDetailsList from './CountryDetailsList';
import axios from 'axios';

function CountryDetails(props){
    const [ details, setDetails ] = useState([]);
    
    let country = window.location.href.split('/')[3];
    let url = 'https://restcountries.eu/rest/v2/name/' + country + '?fullText=true';
 
    useEffect(async () => {
        axios({
            method: 'GET',
            url: url
        }).then(res => {
            setDetails(res.data)
        })
    }, [])


    return (
        <div className="countryDetails">
            {details.map(item => (
                <CountryDetailsList
                    flag={item.flag}
                    name={item.name}
                    nativeName={item.nativeName}
                    population={item.population}
                    region={item.region} 
                    subRegion={item.subregion}
                    capital={item.capital}
                    topLevelDomain={item.topLevelDomain[0]}
                    currencies={item.currencies}
                    languages={item.languages}
                    borderCountries={item.borders}
                    darkTheme={props.darkTheme}
                />
            ))}
        </div>);
}

export default CountryDetails; 