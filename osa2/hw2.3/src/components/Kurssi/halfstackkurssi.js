//import React from 'react';

//### HW2.1 komponenttirakenne  rewrite //### HW1.5   sovellus joka käyttää kurssi-oliota
// example data src\components\Kurssi\halfstackkurssi.js

console.log("halfstackkurssi.js loading");

const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
          { id: 1,
            nimi: 'Reactin perusteet',
            tehtavia: 10
          },
          { id:2,
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
          },
          { id:3,
            nimi: 'Komponenttien tila',
            tehtavia: 14
          }
    ]
};

export default kurssi;