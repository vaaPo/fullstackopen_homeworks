import React from 'react';
import ReactDOM from 'react-dom';
//step1-simplify import './index.css';
//step1-simplify import App from './App';
//step1-simplify import * as serviceWorker from './serviceWorker';

//step1-simplify Voit poistaa tiedostot
// App.js, App.css, App.test.js, logo.svg ja registerServiceWorker.js

const App = () => (
    <div>
      <p>Hello world</p>
    </div>
  )

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

//step1-simplify serviceWorker.unregister();
