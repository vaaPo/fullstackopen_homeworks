import React from 'react';
import CountryRow from './CountryRow';
console.log("FilterCountriesByString.js - loading");

const FilterCountriesByString = ({ searchstring,countries }) => {
    console.log('FilterCountriesByString searchstring',searchstring);
    const hitx=countries.filter(obj => {return obj.name.toUpperCase().includes('Å') });
    console.log(hitx);
  
    const hit=countries.filter(obj => {return obj.name.toUpperCase().includes(searchstring) });
    const hitcount = hit.length;
    console.log('FCBS searchstring:',searchstring,'and hitcount as hit.length',hitcount);
//    console.log('FCBS countries',countries);
    if (hitcount < 11) {
    return (<p><b>FilterCountriesByString:</b>{searchstring} {hit.map(country=><CountryRow key={country.alpha3Code} country={country}/>)}</p>);
    } else {
    return (<p>too many rows, refine search</p>);
    // eslint-disable-next-line
    };
  };
  
export default FilterCountriesByString;
/** <p><b>FilterCountriesByString:</b>{searchstring} {hit.map(country=><CountryRow key={country.alpha3Code} country={country}/>)}</p>
     {countries.map(country=><CountryRow key={country.alpha3Code} country={country}/>)}</p>

* */
