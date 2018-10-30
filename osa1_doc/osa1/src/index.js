import React from 'react';
import ReactDOM from 'react-dom';
//step1-simplify import './index.css';
//step1-simplify import App from './App';
//step1-simplify import * as serviceWorker from './serviceWorker';

//step1-simplify Voit poistaa tiedostot
// App.js, App.css, App.test.js, logo.svg ja registerServiceWorker.js

//step1 const App = () => (
//step1     <div>
//step1       <p>Hello world</p>
//step1     </div>
//step1   )

//step2-add_consts
//step2 const App = () => {
//step2     const now = new Date()
//step2     const a = 10
//step2     const b = 20
//step2     return (
//step2       <div>
//step2         <p>Hello world, it is {now.toString()}</p>
//step2         <p>{a} plus {b} is {a + b}</p>
//step2       </div>
//step2     )
//step2   }
  
//step3-several_components
const Hello = () => {
    return (
      <div>
        <p>Hello world</p>
      </div>
    )
  }
  
  const App = () => {
    return (
      <div>
        <h1>Greetings</h1>
        <Hello />
      </div>
    )
  }


ReactDOM.render(<App />, document.getElementById('root'));
//step1-simplify Hello world

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

//step1-simplify serviceWorker.unregister();
