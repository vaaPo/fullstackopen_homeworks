//import React from 'react';
import halfstackkurssi from './halfstackkurssi';
import nodekurssi from './nodekurssi';
console.log("montakurssia.js loading");

console.log(halfstackkurssi);
console.log(nodekurssi);

//const kurssit2 = [{halfstackkurssi,nodekurssi}];

//const kurssito = [
  const kurssito = [1,2];

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
const kurssit1 = [
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
  }
];
console.log(kurssit);
console.log(kurssit.length);
/**
console.log(kurssito);
console.log(kurssito.length);
const kala = kurssito.map((kurssi) => kurssi.nimi);
console.log(kala);
const fisu = kurssito.map((kurssi) => kurssi);
console.log(fisu);
const fobar = kurssito.map((kurssi) => kurssi.osat[0].nimi);
console.log(fobar);
 */


export default kurssit;