//import React from 'react';
import halfstackkurssi from '../../datafiles/halfstackkurssi';
import nodekurssi from '../../datafiles/nodekurssi';
console.log("montakurssia.js loading");

console.log(halfstackkurssi);
console.log(nodekurssi);

const kurssit = [halfstackkurssi,nodekurssi];


console.log(kurssit);
console.log(kurssit.length);

const kurssit2 = [
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
console.log(kurssit2);
console.log(kurssit2.length);

const jabba=JSON.stringify(kurssit) === JSON.stringify(kurssit2);
console.log("Check if montakurssia can load from files the kurssi parts = ", jabba);

export default kurssit;