import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import notes from './components/notes/notes';
import montakurssia from './components/Kurssi/montakurssia';

console.log("Index.js loading");
//### HW2.4 monta kurssia
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
/**
App                 src\App.js
  Kurssi            src\Kurssi\Kurssi.js
    Otsikko         src\Kurssi\Otsikko.js
    Sisalto         src\Kurssi\Sisalto.js
      Osa
      Osa
  Yhteensä          src\Kurssi\Yhteensa.js

kurssi olio         src\Kurssi\halfstackkurssi.js

 */
console.log("index.js - montakurssia",montakurssia);

ReactDOM.render(
  <App notes={notes} kurssit={montakurssia} />,
  document.getElementById('root')
);
