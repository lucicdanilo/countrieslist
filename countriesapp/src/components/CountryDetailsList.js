import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CountryDetailsList(props){

    // Napraviti ove dzave kao zasebne komponente i onda je mnogo lakse sa axiososm....

    return (
        <div>
            <Link to='/'>
                <div>Back</div>
            </Link>
            <div><img className="countryFlagImg" src={props.flag} /></div>
            <div>{props.name}</div>
            <div>
                <div><span className="bold">Native Name:</span> {props.nativeName}</div>
                <div><span className="bold">Population:</span> {props.population}</div>
                <div><span className="bold">Region:</span> {props.region}</div>
                <div><span className="bold">Sub Region:</span> {props.subRegion}</div>
                <div><span className="bold">Capital:</span> {props.capital}</div>
            </div>
            <div>
                <div><span className="bold">Top Level Domain:</span> {props.topLevelDomain}</div>
                <div><span className="bold">Currencies:</span> {props.currencies[0].name}</div>
                <div><span className="bold">Languages:</span> {props.languages[0].name}</div>
            </div>
            <div><span></span>Border Countries:</div>
            <div></div>
        </div>);
}

export default CountryDetailsList;