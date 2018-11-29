import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import notes from './components/notes/notes';
import kurssi from './components/Kurssi/kurssi';

console.log("Index.js loading");
//  <App kurssi={kurssi} />,

ReactDOM.render(
  <App notes={notes} kurssi={kurssi} />,
  document.getElementById('root')
);
