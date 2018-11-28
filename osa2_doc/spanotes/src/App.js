import React from 'react';
import ComponentNote from './components/ComponentNote';     // the Note rewritten to its own file

const App = (props) => {
    const { notes } = props;
    //const rivit = () => notes.map(note => <li>{note.content}</li>);   // FIXME Warning: Each child in an array or iterator should have a unique "key" prop.
    const rivit = () => notes.map(note => <li key={note.id}>{note.content}</li>);  //FIXME the warning doesnt go away unless the return is cleaned from "Muistiinpanot + Muistiinpanot with map"
  
    const betterrivit = () => notes.map(note =>
      <li key={note.id}>
          {note.content}
      </li>);
  
  /** THESE WERE CLEANED
    <h1>Muistiinpanot</h1>
    <ul>
      <li>{notes[0].content}</li>
      <li>{notes[1].content}</li>
      <li>{notes[2].content}</li>
    </ul>
    <h1>Muistiinpanot with map</h1>
    <ul>
    {notes.map(note => <li>{note.content}</li>)}
    </ul>
   */
  
    return (
      <div>
        <h1>Muistiinpanot with method</h1>
        <ul>
          {rivit()}
        </ul>
        <h1>Muistiinpanot with method, better format</h1>
        <ul>
          {betterrivit()}
        </ul>
        <h1>Muistiinpanot with ./components/ComponentNote-component</h1>
        <ul>
          {notes.map(note=><ComponentNote key={note.id} note={note}/>)}
        </ul>
      </div>
    );
  };
  export default App;

