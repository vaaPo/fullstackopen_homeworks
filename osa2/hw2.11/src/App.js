import React from 'react';
import Kurssit from './components/Kurssi/Kurssit';
import Note from './components/Notes/Note';
import PersonRow from './components/PhoneBook/PersonRow';
import Clock from './components/Clock/Clock';
import TemperatureCalculator from './components/Temperature/TemperatureCalculator';
import FormPersonsByString from './components/PhoneBook/FormPersonsByString';
import FilterPersonsByName from './components/PhoneBook/FilterPersonsByName';
import FilterPersonsByString from './components/PhoneBook/FilterPersonsByString';
import AllPersons from './components/PhoneBook/AllPersons';
import AxiosDemosNotes from './components/AxiosDemos/AxiosDemoNotes';
import AxiosDemosPersons from './components/AxiosDemos/AxiosDemoPersons';
import AppPhoneBook from './components/PhoneBook/AppPhoneBook';
import axios from 'axios';
import AxiosInitialFetchPersons from './components/PhoneBook/AppPhoneBook';



console.log("App.js - imports loaded");
//### HW2.11 PhoneBook goes json-server and split to components: duplicate prevention,phonenumbers and search
/**
json-server         /db.json        has notes and persons
App                 src\App.js
  Kurssi            src\Kurssi\Kurssi.js
    Otsikko         src\Kurssi\Otsikko.js
    Sisalto         src\Kurssi\Sisalto.js
      Osa
      Osa
  Yhteensä          src\Kurssi\Yhteensa.js

  Notes
  PhoneBook         Form, Filter-files, and PhoneBook
  Clock             mdn example
  Temperature       mdn example

  datafiles
    Kurssit         src\datafiles\Kurssit\halfstackkurssi.js
                    src\datafiles\Kurssit\nodekurssi.js
    Notes           src\datafiles\Notes\notes.js
    PhoneBook
kurssi data         

 */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: props.notes,
      kurssit: props.kurssit,
      newNote: '',
      showAll: true,
      persons: props.persons,
      newPerson: '',
      newPhonenumber: '',
      newsearchPerson: '',
      stateliftupsearchstring: '',
      value: '',
      initpersons: ''
    };
    this.toggleVisible = this.toggleVisible.bind(this);
    this.addNote = this.addNote.bind(this);
    this.handleNoteChange= this.handleNoteChange.bind(this);
    this.addPerson = this.addPerson.bind(this);
    this.handlePersonChange = this.handlePersonChange.bind(this);
    this.handlesearchPersonChange = this.handlesearchPersonChange.bind(this);
    this.handleFormPersonByString = this.handleFormPersonByString.bind(this);
  };

/**console.log("App.js - const App=(props) loading");
console.log("App.js - props",props);
console.log("App.js - kurssit", kurssit);
console.log("App.js - notes", notes);
console.log("App.js - just before return");
 */

componentDidMount() {
  console.log('App.js did mount')
  axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('App.js promise fulfilled');
      this.setState({ initpersons: response.data });
    });
};

  toggleVisible = () => {
    this.setState({ showAll: !this.state.showAll });   // toggles the true to false to true
  };

  addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: this.state.newNote,
      date: new Date().new,
      important: Math.random() > 0.5,         // 50% chance to get true or false
      id: this.state.notes.length + 1
    };

    const notes = this.state.notes.concat(noteObject);

    this.setState({
      notes,
      newNote: ''
    });
  };

  handleNoteChange = (event) => {
    console.log(event.target.value);
    this.setState({ newNote: event.target.value });
  };

  addPerson = (event) => {
    event.preventDefault();
    const duplicate = this.state.persons.find(person => person.name === this.state.newPerson);
    if (duplicate===undefined) {
      console.log(duplicate);
      alert('addPerson submitted: ' + this.state.newPerson + ' with phonenumber:' + this.state.newPhonenumber);
      const personObject = {
        name: this.state.newPerson,
        phonenumber: this.state.newPhonenumber,
        id: this.state.persons.length + 1
      };
  
      const persons = this.state.persons.concat(personObject);
  
      this.setState({
        persons: persons,
        newPerson: '',
        newPhonenumber: ''
      });
      } else {
      //alert('duplicate check: ' +this.state.newPerson +" is duplicate " + duplicate); 
    };

  };

  handlePersonChange = (event) => {
    console.log(event.target.value);
    this.setState({ newPerson: event.target.value });
  };

  handlePhonenumberChange = (event) => {
    console.log(event.target.value);
    this.setState({ newPhonenumber: event.target.value });
  };

  handlesearchPersonChange = (event) => {
    console.log(event.target.value);
    this.setState({
      value: event.target.value.toUpperCase(),
      newsearchPerson: event.target.value.toUpperCase(),
      stateliftupsearchstring: event.target.value.toUpperCase()
    });

  };

  handleFormPersonByString = (event) => {
    console.log(event.target.value);
    //alert('handleFormPersonByString event.target.value: ' + event.target.value);
    this.setState({
      value: event.target.value.toUpperCase(),
      newsearchPerson: event.target.value.toUpperCase()
    });
  };

  // conditional chains type, but only one row
  //  of ternary https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
  // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
  // the difference of == and ===
  render() { 
      const notesToShow =             // ternary operator, if showAll===false then filter
      this.state.showAll ?
        this.state.notes :
        this.state.notes.filter(note => note.important === true) ;         // render only important===true

    const label = this.state.showAll ? 'vain tärkeät' : 'kaikki'

    //Filter array of objects, which property matches value, returns array:
    const searchitpersons = this.state.persons.filter(obj => {return obj.name.toUpperCase() === this.state.newsearchPerson });
    const searchitpersons3 = this.state.persons.filter(obj => {return obj.name.toUpperCase().includes(this.state.newsearchPerson) });

    //const stateliftupsearchstring = this.state.stateliftupsearchstring;
    //alert('App stateliftupsearchstring: ' + stateliftupsearchstring);
//        <AxiosInitialFetchPersons initpersons={this.state.initpersons} />
    const initperse=this.state.initpersons;
    console.log('initperse',this.state.initpersons);

    return (
      <div>
        <div id="opetusohjelma"><h1>HW2.11 PhoneBook goes json-server and split to components: duplicate prevention,phonenumbers and search</h1>
        <AppPhoneBook />
        <AxiosDemosPersons />
        <AxiosDemosNotes />
        <Clock />
        <TemperatureCalculator />
        <div id="FormPersonsByString"><h1>FORM FormPersonsByString</h1>
        <FormPersonsByString value={this.state.value} onChangeValue={this.handleFormPersonByString} />

        <div id="AllPersons"><h2>AllPersons</h2>
        <AllPersons persons={this.state.persons}/>
        <div id="FilterPersonsByName"><h2>FilterPersonsByName</h2>
        <FilterPersonsByName searchstring={this.state.newsearchPerson} persons={this.state.persons}/>
        <div id="FilterPersonsByString"><h2>FilterPersonsByString</h2>
        <FilterPersonsByString searchstring={this.state.newsearchPerson} persons={this.state.persons}/>
        <form onChange={this.searchPerson}>
          <label>search:
            <input
            name="searchPersonInput"
            type="text"
            value={this.state.newsearchPerson}
            onChange={this.handlesearchPersonChange}
            />
          </label>
        </form>
        debug: {this.state.newsearchPerson}
        <div id="searchedpersonsincludes"><h2>Searched persons, string includes</h2>
            {searchitpersons3.map(person=><PersonRow key={person.id} person={person}/>)}
        <div id="searchedpersonsexact"><h2>Searched persons, exact match</h2>
            {searchitpersons.map(person=><PersonRow key={person.id} person={person}/>)}

        <div id="persons"><h2>All persons</h2>
            {this.state.persons.map(person=><PersonRow key={person.id} person={person}/>)}
        <form onSubmit={this.addPerson}>
          <label>name: 
          <input
            name="addPersonInput"
            type="text"
            value={this.state.newPerson} 
            onChange={this.handlePersonChange}
          />
          </label><p>
          <label>phonenumber: 
          <input
            name="addPhonenumberInput"
            type="text"
            value={this.state.newPhonenumber} 
            onChange={this.handlePhonenumberChange}
          />
          </label></p>
          <button type="submit">tallenna person</button>
        </form>
        <div>
        debug: {this.state.newPerson}
        </div>

        <h1>Muistiinpanot</h1>
        <div>
          <button onClick={this.toggleVisible}>
            näytä {label}
          </button>
        </div>
        <ul>
          {notesToShow.map(note => <Note key={note.id} note={note} />)}
        </ul>
        <form onSubmit={this.addNote}>
          <input
            name="addNoteInput"
            type="text"
            value={this.state.newNote} 
            onChange={this.handleNoteChange}
          />
          <button type="submit">tallenna</button>
        </form>
        <div id="Kurssit">
        <Kurssit kurssit={this.state.kurssit}/>
        <div id="notes"><h2>Mapped ALL notes</h2>
            {this.state.notes.map(note=><Note key={note.id} note={note}/>)}
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
}

export default App

