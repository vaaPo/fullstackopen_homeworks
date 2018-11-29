//import React from 'react';
console.log("montakurssia.js loading");
import halfstackkurssi from './halfstackkurssi';
import nodekurssi from './nodekurssi';

console.log(halfstackkurssi);
console.log(nodekurssi);

const kurssit = [{halfstackkurssi,nodekurssi}];

console.log(kurssit);


/**
const kurssit = [
  {
    nimi: 'Half Stack -sovelluskehitys',
    id: 1,
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      }
    ]
  },
  {
    nimi: 'Node.js',
    id: 2,
    osat: [
      {
        nimi: 'Routing',
        tehtavia: 3,
        id: 1
      },
      {
        nimi: 'Middlewaret',
        tehtavia: 7,
        id: 2
      }
    ]
  }
];
 */

export default kurssi;