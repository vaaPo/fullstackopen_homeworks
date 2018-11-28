import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//https://fullstackopen.github.io/osa2/
//https://reactjs.org/docs/reconciliation.html#recursing-on-children
//https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
//https://www.npmjs.com/package/shortid
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import


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

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
);

