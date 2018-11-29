import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import notes from './components/notes/notes';
import halfstackkurssi from './components/Kurssi/halfstackkurssi';

console.log("Index.js loading");
//### HW2.3 tehtävien määrä taulukon metodilla reduce.
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

ReactDOM.render(
  <App notes={notes} kurssi={halfstackkurssi} />,
  document.getElementById('root')
);
