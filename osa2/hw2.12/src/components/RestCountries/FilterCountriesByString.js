import React from 'react';
import CountryRow from './CountryRow';
console.log("FilterCountriesByString.js - loading");

const FilterCountriesByString = ({ searchstring,countries }) => {
    const hit=countries.filter(obj => {return obj.name.toUpperCase().includes(searchstring) });

    console.log('FCBS searchstring',searchstring);
    console.log('FCBS persons',countries);
    console.log('FCBS hit',hit);
    return (
        <p><b>FilterCountriesByString:</b>{searchstring} {hit.map(country=><CountryRow key={country.id} person={country}/>)}</p>

    );
  };
  
export default FilterCountriesByString;
