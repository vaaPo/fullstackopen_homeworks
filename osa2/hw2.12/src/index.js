import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import notes from './datafiles/Notes/notes';
import montakurssia from './components/Kurssi/montakurssia';
import persons from './datafiles/PhoneBook/persons';
//import AxiosInitialFetchPersons from './components/PhoneBook/AxiosInitialFetchPersons';
//import axios from 'axios';
import './components/AxiosDemos/AxiosDemos.js';

console.log("Index.js loading");
//const kala=AxiosInitialFetchPersons;

//console.log("Index.js axios kala", kala);

//### HW2.11 PhoneBook goes json-server and split to components: duplicate prevention,phonenumbers and search
/**
App                 src\App.js
  Kurssit           src\Kurssi\Kurssit.js
   Kurssi           src\Kurssi\Kurssi.js
    Otsikko         src\Kurssi\Otsikko.js
     Sisalto        src\Kurssi\Sisalto.js
      Osa
      Osa
  Yhteensä          src\Kurssi\Yhteensa.js

kurssi loader       src\Kurssi\montakurssia.js
kurssi data         src\datafiles\halfstackkurssi.js
                    src\datafiles\nodekurssi.js

 */


ReactDOM.render(
  <App notes={notes} kurssit={montakurssia} persons={persons}/>,
  document.getElementById('root')
);
