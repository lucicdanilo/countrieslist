function CountryCard(props) {
    return(
        <div>
            <div>{props.flag}</div>
            <div>{props.name}</div>
            <div>
                <div>Population: {props.population}</div>
                <div>Region: {props.region}</div>
                <div>Capital: {props.capital}</div>
            </div>
        </div>
    )
}

export default CountryCard;