import React from 'react';

const CountryRow = ({ country }) => {
  return (
    <li>{country.id} {country.name}</li>
  );
};

export default CountryRow;