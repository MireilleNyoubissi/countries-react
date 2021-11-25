import React, { useState } from "react";
import CountryCard from "./CountryCard";
import CountriesAll from "./data/countriesAll.json";
import './App.css';

function App() {
  const [countries, setCountries] = useState(CountriesAll);

  function filteredCounties(nameText) {
    setCountries(CountriesAll.filter(v => v.name.toLowerCase().includes(nameText) || v.capital.toLowerCase().includes(nameText)))
  }

  return (
    <div className = "all">
      <form className="input-group rounded">
        <input onKeyUp = {(e) => filteredCounties(e.currentTarget.value.toLowerCase())}  type="search" className="rounded" placeholder="Search country..." />
      </form>
      <CountryCard data={countries} />
    </div>
  );
}

export default App;
