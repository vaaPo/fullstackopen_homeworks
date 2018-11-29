import React from 'react';
//import Kurssi from './components/Kurssi/Kurssi';
import Kurssit from './components/Kurssi/Kurssit';
console.log("App.js - imports loaded");
//### HW2.1 komponenttirakenne  rewrite //### HW1.5   sovellus joka käyttää kurssi-oliota
/**
App                 src\App.js
  Kurssi            src\Kurssi\Kurssi.js
    Otsikko         src\Kurssi\Otsikko.js
    Sisalto         src\Kurssi\Sisalto.js
      Osa
      Osa
  Yhteensä          src\Kurssi\Yhteensa.js

kurssi data         src\Kurssi\halfstackkurssi.js

 */
const App = (props) => {
  const notes = props.notes;
  const kurssit = props.kurssit;

console.log("App.js - const App=(props) loading");
console.log("App.js - props",props);

console.log("App.js - kurssit", kurssit);
console.log("App.js - notes", notes);
console.log("App.js - just before return");

return (<div id="opetusohjelma"><h1>OPETUSOHJELMA HW2.4 monta kurssia</h1>
        <div id="Kurssit">
        <Kurssit kurssit={kurssit}/>
        </div></div>
    );
};

  
export default App;

