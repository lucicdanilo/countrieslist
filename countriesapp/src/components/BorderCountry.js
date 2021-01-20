import { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";

function BorderCountries(props){

    const history = useHistory();

    const url = 'https://restcountries.eu/rest/v2/alpha/'; 

    const [ borderCountryName, setBorderCountryName ] = useState(0);

    function handleClick() {
        history.push("/" + borderCountryName);
        window.location.reload(false);
    }

    axios.get(url + props.borderCountries)
    .then(res => res.data)
    .then(res => setBorderCountryName(res.name))

    return (
        <div onClick={handleClick} className={props.darkTheme ? "borderCountry lightTheme" : "borderCountry darkTheme"}>
            <div>{borderCountryName}</div>
        </div>

    )
}

export default BorderCountries;