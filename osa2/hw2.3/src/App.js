import React from 'react';
import Kurssi from './components/Kurssi/Kurssi';

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
  const kurssi = props.kurssi;

console.log("App.js - const App=(props) loading");
console.log("App.js - props",props);

console.log("App.js - kurssi", kurssi);
console.log("App.js - notes", notes);
console.log("App.js - just before return");

return (
      <div id="hw"> <h1>### HW2.3 tehtävien määrä taulukon metodilla reduce.</h1>
       <div id="Kurssi">
        <Kurssi kurssi={kurssi} />
        </div>
       </div>
    )
  };
  
export default App;

