import { Link } from 'react-router-dom';
import BorderCountry from './BorderCountry';

function CountryDetailsList(props){
    return (
        <div>
            <Link to='/'>
                <div className="backButton">Back</div>
            </Link>
            <div><img className="countryFlagImg" src={props.flag} /></div>
            <div className="countryNameDetails">{props.name}</div>
            <div className="groupDetails">
                <div><span className="bold">Native Name:</span> {props.nativeName}</div>
                <div><span className="bold">Population:</span> {props.population}</div>
                <div><span className="bold">Region:</span> {props.region}</div>
                <div><span className="bold">Sub Region:</span> {props.subRegion}</div>
                <div><span className="bold">Capital:</span> {props.capital}</div>
            </div>
            <div className="groupDetails">
                <div><span className="bold">Top Level Domain:</span> {props.topLevelDomain}</div>
                <div><span className="bold">Currencies:</span> {props.currencies[0].name}</div>
                <div><span className="bold">Languages:</span> {props.languages[0].name}</div>
            </div>
            <div className="groupDetails">
                <div className="bold">Border Countries:</div>
                <div className="borderCountries">
                    {props.borderCountries.map(item => 
                        <BorderCountry borderCountries={item}></BorderCountry>
                    )}
                </div>
            </div>

        </div>);
}

export default CountryDetailsList;