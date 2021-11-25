import React from "react";

function CountryCard(props){
    console.log(props)
    return (
      <div className="card-wrapper">
        {props.data.map((country) => (
          <div className="card mt-3">
            <div className="card-body">
              <h5 class="card-title">{country.name}</h5>
              <p className="card-text">Population: {country.population}</p>
              <p className="card-text">Region: {country.region}</p>
              <p className="card-text">Capital: {country.capital}</p>
            </div>
          </div>
        ))}
      </div>
    );
}

export default CountryCard;