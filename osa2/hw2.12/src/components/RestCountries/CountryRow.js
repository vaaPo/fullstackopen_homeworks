import React from 'react';

const CountryRow = ({ country }) => {
//    console.log('CountryRow', country);
  return (
    <li> alpha3Code: {country.alpha3Code} name: {country.name}</li>
  );
};

export default CountryRow;