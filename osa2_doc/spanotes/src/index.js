import React from 'react';
import ReactDOM from 'react-dom';

//https://fullstackopen.github.io/osa2/

const notes = [
  {
    id: 1,
    content: 'HTML on helppoa',
    date: '2017-12-10T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Selain pystyy suorittamaan vain javascriptiä',
    date: '2017-12-10T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'HTTP-protokollan tärkeimmät metodit ovat GET ja POST',
    date: '2017-12-10T19:20:14.298Z',
    important: true
  }
];

const App = (props) => {
  const { notes } = props;
  //const rivit = () => notes.map(note => <li>{note.content}</li>);   // FIXME Warning: Each child in an array or iterator should have a unique "key" prop.
  const rivit = () => notes.map(note => <li key={note.id}>{note.content}</li>);  //FIXME the warning doesnt go away unless the return is cleaned from "Muistiinpanot + Muistiinpanot with map"


  return (
    <div>
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
      <h1>Muistiinpanot with method</h1>
      <ul>
        {rivit()}
      </ul>
    </div>
  );
};

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
);

