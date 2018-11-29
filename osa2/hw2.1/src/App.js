//import React, { Component } from 'react';
import React from 'react';
import Kurssi from './components/Kurssi/Kurssi';
//import ComponentNote from './components/notes/ComponentNote';     // the Note rewritten to its own file
//import HelloWprops from './components/Hello/HelloWprops';



console.log("App.js - imports loaded");

const App = (props) => {
//  const { kurssi } = props;
  const notes = props.notes;
  const kurssi = props.kurssi;
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
/** here are multiple modules with names that only differ in casing.        //FIXME why Kurssi and kurssi ?
This can lead to unexpected behavior when compiling on a filesystem with other case-semantic.
Use equal casing. Compare these module identifiers:
 */
console.log("App.js - const App=(props) loading");
console.log("App.js - props",props);

console.log("App.js - kurssi", kurssi);
console.log("App.js - notes", notes);
console.log("App.js - just before return");

return (
      <div id="hw"> <h1>#### HW2.1 components total rewrite of ### HW1.5 sovellus joka käyttää kurssi-oliota</h1>
       <div id="Kurssi">
        <Kurssi kurssi={kurssi} />
        </div>
       </div>
    )
  };
  
export default App;

/**small tests*/
//           <div id="notes">
//            {notes.map(note=><ComponentNote key={note.id} note={note}/>)}
//          </div>
//       <div id="step5">
//       <h5>Greetings with HelloWprops</h5>
//       {/** step5-2props */} 
//       <HelloWprops name="Arto" age={26 + 10} />
//
//
