import React from 'react';
import AppCountries from './components/RestCountries/AppCountries';
import AppPhoneBook from './components/PhoneBook/AppPhoneBook';
import AppNotes from './components/Notes/AppNotes';
import Clock from './components/Clock/Clock';
import TemperatureCalculator from './components/Temperature/TemperatureCalculator';
import Kurssit from './components/Kurssi/Kurssit';
//import AxiosDemosNotes from './components/AxiosDemos/AxiosDemoNotes';
//import AxiosDemosPersons from './components/AxiosDemos/AxiosDemoPersons';




console.log("App.js - imports loaded");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kurssit: props.kurssit,
    };
  };

/**console.log("App.js - const App=(props) loading");
console.log("App.js - props",props);
console.log("App.js - kurssit", kurssit);
console.log("App.js - notes", notes);
console.log("App.js - just before return");
 */

  render() { 
//        <AppPhoneBook />

    return (
      <div>
        <div id="AppNotes"><AppNotes /></div>
        <div id="opetusohjelma"><h1>App</h1> HW2.14 AppPhoneBook uses server to add + all the previous sample and hw apps: AppCountries, AxiosDemosNotes, AxiosDemosPersons, Clock, TemperatureCalculator, Opetusohjelma
        <div id="AppPhoneBook"><h2>AppPhoneBook</h2><AppPhoneBook /></div>
        <div id="AppCountries"><h2>AppCountries</h2><AppCountries /></div>        
        <div id="Kurssit"><h2>Kurssit</h2><Kurssit kurssit={this.state.kurssit}/></div>
        <div id="Clock"><h2>Clock</h2><Clock /></div>
        <div id="TemperatureCalculator"><h2>TemperatureCalculator</h2><TemperatureCalculator /></div>
        </div>
        </div>
    );
  };
};

export default App
/**
 *      <div id="AppPhoneBook"><AppPhoneBook /></div>
        <div id="AxiosDemosNotes"><AxiosDemosNotes /></div>
        <div id="AxiosDemosPersons"><AxiosDemosPersons /></div>
        <div id="AppNotes"><AppNotes /></div>
        <div id="Clock"><Clock /></div>
        <div id="TemperatureCalculator"><TemperatureCalculator /></div>
        <div id="Kurssit">
        <Kurssit kurssit={this.state.kurssit}/>
        </div>
 
 */
