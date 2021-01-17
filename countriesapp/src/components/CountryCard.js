function CountryCard(props) {

    let darkTheme = props.darkTheme;

    return(
        <div className={darkTheme ? "countryCard lightCard" : "countryCard darkCard"}> 
            <div><img className="countryFlagImg" src={props.flag} /></div>
            <div className="countryName">{props.name}</div>
            <div>
                <div className="cardInfo"><span className="bold">Population:</span> {props.population}</div>
                <div className="cardInfo"><span className="bold">Region:</span> {props.region}</div>
                <div className="cardInfo"><span className="bold">Capital:</span> {props.capital}</div>
            </div>
        </div>
    )
}

export default CountryCard;