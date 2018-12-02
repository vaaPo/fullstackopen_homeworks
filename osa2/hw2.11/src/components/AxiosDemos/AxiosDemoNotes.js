import React from 'react';
import axios from 'axios';
import Note from '../Notes/Note';

class AxiosDemoNotes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      newNote: '',
      showAll: true
    };
    console.log('constructor');
  };

  componentDidMount() {
    console.log('AxiosDemosNotes did mount');
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('AxiosDemoNotes promise fulfilled')
        this.setState({ notes: response.data })
      });
  };

  componentWillUnmount() {            // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
    console.log('AxiosDemosNotes componentWillUnmount');
  }; 

  render() {
    console.log('AxiosDemosNotes render');
    // ...
    const notesToShow =             // ternary operator, if showAll===false then filter
    this.state.showAll ?
      this.state.notes :
      this.state.notes.filter(note => note.important === true) ;         // render only important===true

    return (
        <ul>
          AxiosDemosNotes: {notesToShow.map(note => <Note key={note.id} note={note} />)}
        </ul>
    );
  };
};
export default AxiosDemoNotes;