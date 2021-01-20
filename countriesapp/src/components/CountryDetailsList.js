import { Link } from 'react-router-dom';
import BorderCountry from './BorderCountry';
import Arrow from '../icons/long-arrow.svg';
import ArrowWhite from '../icons/long-arrowWhite.svg';

function CountryDetailsList(props){
    return (
        <div>
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                <div className={props.darkTheme ? "backButton lightTheme" : "backButton darkTheme"}>
                    <img src={props.darkTheme ? Arrow : ArrowWhite} className="backArrowIcon" />
                    <div className="backButtonText">Back</div>
                </div>
            </Link>
            <div><img className="countryFlagImgDetails" src={props.flag} /></div>
            <div className="countryNameDetails">{props.name}</div>
            <div className="groupDetails firstGroup">
                <div><span className="bold">Native Name:</span> {props.nativeName}</div>
                <div><span className="bold">Population:</span> {props.population}</div>
                <div><span className="bold">Region:</span> {props.region}</div>
                <div><span className="bold">Sub Region:</span> {props.subRegion}</div>
                <div><span className="bold">Capital:</span> {props.capital}</div>
            </div>
            <div className="groupDetails secondGroup">
                <div><span className="bold">Top Level Domain:</span> {props.topLevelDomain}</div>
                <div><span className="bold">Currencies:</span> {props.currencies[0].name}</div>
                <div><span className="bold">Languages:</span> {props.languages[0].name}</div>
            </div>
            <div className="groupDetails thirdGroup">
                <div className="bold">Border Countries:</div>
                <div className="borderCountries">
                    {props.borderCountries.map(item => 
                        <BorderCountry borderCountries={item} darkTheme={props.darkTheme}></BorderCountry>
                    )}
                </div>
            </div>

        </div>);
}

export default CountryDetailsList;