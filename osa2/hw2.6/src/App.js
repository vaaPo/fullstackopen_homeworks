import React from 'react';
import Kurssit from './components/Kurssi/Kurssit';
import Note from './components/Notes/Note';

console.log("App.js - imports loaded");
//### HW2.6 PhoneBook komponenttirakenne 
/**
App                 src\App.js
  Kurssi            src\Kurssi\Kurssi.js
    Otsikko         src\Kurssi\Otsikko.js
    Sisalto         src\Kurssi\Sisalto.js
      Osa
      Osa
  Yhteensä          src\Kurssi\Yhteensa.js

  Notes
  PhoneBook

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
      showAll: true
    };
  };

/**console.log("App.js - const App=(props) loading");
console.log("App.js - props",props);
console.log("App.js - kurssit", kurssit);
console.log("App.js - notes", notes);
console.log("App.js - just before return");
 */

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

  // conditional chains type, but only one row
  //  of ternary https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
  // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
  // the difference of == and ===
  render() { 
      const notesToShow =             // ternary operator, if showAll===false then filter
      this.state.showAll ?
        this.state.notes :
        this.state.notes.filter(note => note.important === true)          // render only important===true

    const label = this.state.showAll ? 'vain tärkeät' : 'kaikki'

    return (
      <div>
        <div id="opetusohjelma"><h1>OPETUSOHJELMA HW2.6 PhoneBook</h1>
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
    )
  }
}

export default App

