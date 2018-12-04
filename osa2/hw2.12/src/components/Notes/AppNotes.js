import React from 'react';
import axios from 'axios';
import NoteRow from './NoteRow';

class AppNotes extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        notes: [],
        newNote: '',
        showAll: true
      };
      console.log('AppNotes constructor');
      this.toggleVisible = this.toggleVisible.bind(this);
      this.addNote = this.addNote.bind(this);
      this.handleNoteChange= this.handleNoteChange.bind(this);
    };
  
  componentDidMount() {
      console.log('AppNotes did mount');
      axios
        .get('http://localhost:3001/notes')
        .then(response => {
          console.log('AppNotes promise fulfilled');
          this.setState({ notes: response.data });
        });
    };
 
  componentWillUnmount() {            // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
      console.log('AppNotes componentWillUnmount');
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
      
      toggleVisible = () => {
        this.setState({ showAll: !this.state.showAll });   // toggles the true to false to true
      };
    
    
  render() {
    console.log('AppNotes render');
    const notesToShow =             // ternary operator, if showAll===false then filter
    this.state.showAll ?
      this.state.notes :
      this.state.notes.filter(note => note.important === true) ;         // render only important===true

  const label = this.state.showAll ? 'vain tärkeät' : 'kaikki';


    return (
        <React.Fragment>
        <h1>AppNotes </h1>
          <button onClick={this.toggleVisible}>
            näytä {label}
          </button>
        <ul>
          {notesToShow.map(note => <NoteRow key={note.id} note={note} />)}
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
                <p>Mapped ALL notes:
                {this.state.notes.map(note=><NoteRow key={note.id} note={note}/>)}
                </p>
        </React.Fragment>
        );
    };
  };

export default AppNotes;

