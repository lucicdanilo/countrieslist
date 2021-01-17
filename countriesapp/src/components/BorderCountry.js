import {useState} from 'react';
import axios from "axios";

function BorderCountries(props){

    const url = 'https://restcountries.eu/rest/v2/alpha/'; 

    const [ borderCountryName, setBorderCountryName ] = useState(0);

    axios.get(url + props.borderCountries)
    .then(res => res.data)
    .then(res => setBorderCountryName(res.name))

    return (
        <div className={props.darkTheme ? "borderCountry lightTheme" : "borderCountry darkTheme"}>
            <div>{borderCountryName}</div>
        </div>
    )
}

export default BorderCountries;