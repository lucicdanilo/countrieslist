import { Link } from 'react-router-dom';

function CountryDetailsList(props){

    return (
        <div>
            <Link to='/'>
                <div>Back</div>
            </Link>
            <div><img className="countryFlagImg" src={props.flag} /></div>
            <div>{props.name}</div>
            <div>
                <div>Native Name: {props.nativeName}</div>
                <div>Population: {props.population}</div>
                <div>Region: {props.region}</div>
                <div>Sub Region: {props.subRegion}</div>
                <div>Capital: {props.capital}</div>
            </div>
            <div>
                <div>Top Level Domain: {props.topLevelDomain}</div>
                <div>Currencies: {props.currencies[0].name}</div>
                <div>Languages: {props.languages[0].name}</div>
            </div>
            <div>Border Countries:</div>
            <div>{props.borderCountries}</div>
        </div>);
}

export default CountryDetailsList;