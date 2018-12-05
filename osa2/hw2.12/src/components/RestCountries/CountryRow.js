import React from 'react';
import Image from 'react-image-resizer';

function CountryRow(props) {
  console.log("CountryRow - loading");
  console.log("CountryRow - props", props);
  const country=props.country;
  const responsedatalength=props.responsedatalength;
  const name = <><h3>{country.name}</h3></>;
  const alpha3Code = <>{country.alpha3Code}</>;
  const capital = <><b>capital:</b> {country.capital}</>;
  const population = <><b>population:</b> {country.population}</>;
  const flag = <Image src={country.flag} height={50} />;

  if (responsedatalength===1) {
              const detail = <div id="name">{name}
                              <div id="capital">{capital}
                              <div id="population">{population}
                              <div id="alpha3">{alpha3Code}</div>
                              <div id="flag">{flag}
                              </div>
                              </div>
                              </div>
                              </div> ;
              return (detail);
    } else { 
              const row=<><li>{country.alpha3Code} {country.name}</li></>;
              return (row);
              // eslint-disable-next-line
            };
};

export default CountryRow;

/**
const ala = <Image src="https://restcountries.eu/data/ala.svg" height={50} />
    <div id="ala">{ala}
    </div>

*/