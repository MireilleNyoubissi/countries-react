import React from "react";
import CountryCard from "./CountryCard";
import CountriesAll from "./data/countriesAll.json";
import './App.css';

function App() {
  return (
    <div className="card-container">
      <form className="input-group rounded">
        <input type="search" className="rounded" placeholder="Search" />
      </form>
      <CountryCard data={CountriesAll} />
    </div>
  );
}

export default App;
