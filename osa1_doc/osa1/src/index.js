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

//step4-props-object-argument-properties
const Hello_w_props = (props) => {
    return (
        <div>
            <p>Hello {props.name}</p>
        </div>
    )
}

//step5-2props
const Hello_w_2props = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old</p>
        </div>
    )
}

//step3-user_components in App
const App = () => {
    const now = new Date() //step2-add_consts
    const a = 10           //step2-add_consts
    const b = 20           //step2-add_consts
    const nimi = 'Pekka'    //step5-2props
    const ika = 10          //step5-2props
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
                    <div id="step4">
                        <h4>Greetings</h4>
                        //step4-props-object-argument-properties
                        <Hello_w_props name="Arto" />
                        <Hello_w_props name="Pekka" />
                        <div id="step5">
                            <h5>Greetings</h5>
                            //step5-2props
                            <Hello_w_2props name="Arto" age={26 + 10} />
                            <Hello_w_2props name={nimi} age={ika} />
                        </div>
                    </div>
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
