import React from 'react';
import ReactDOM from 'react-dom';
//step1-simplify import './index.css';
//step1-simplify import App from './App';
//step1-simplify import * as serviceWorker from './serviceWorker';

//step1-simplify Voit poistaa tiedostot
// App.js, App.css, App.test.js, logo.svg ja registerServiceWorker.js

const Hello = () => {
    return (
        <div>
            <p>Hello world</p>
        </div>
    )
}


//step4-user_components in App2
const App = () => {
    const now = new Date() //step2-add_consts
    const a = 10           //step2-add_consts
    const b = 20           //step2-add_consts

    return (
        <div id="step1">
            <h1>Greetings step1</h1>
            //step1-simplify code
            <p>Hello world</p>
            <div id="step2">
                <h2>Greetings step2</h2>
                //step2-add_consts
                <p>Hello world, it is {now.toString()}</p>
                <p>{a} plus {b} is {a + b}</p>
                <div id="step3">
                    <h3>Greetings step3</h3>
                    //step3-use_components
                    <Hello />
                    <Hello />
                    <Hello />
                </div>
            </div>
        </div>
    )
}


//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

//step1-simplify Hello world

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

//step1-simplify serviceWorker.unregister();
