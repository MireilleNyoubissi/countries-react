import React from "react";

function CountryCard(props){
    console.log(props)
    return (
      <div className="card-wrapper">
        {props.data.map((country) => (
          <div className="card mt-9 rounded">
            <img src={country.flag} alt="country's flag" />
            <div className="card-body">
              <h5 class="card-title">{country.name}</h5>
              <p className="card-text"><span>Population</span>: {country.population}</p>
              <p className="card-text"><span>Region</span>: {country.region}</p>
              <p className="card-text"><span>Capital</span>: {country.capital}</p>
            </div>
          </div>
        ))}
      </div>
    );
}

export default CountryCard;