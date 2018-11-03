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

//step6-missing-capital-in-component-name-footer
const footer_err = () => {
    return (
      <div>greeting app created by <a href="https://github.com/vaaPo/fullstackopen_homeworks/commits/master/osa1_doc">osa1_doc</a></div>
    )
  }

 //step6-missing-capital-in-component-name-footer
const Footer = () => {
    return (
      <div>greeting app created by <a href="https://github.com/vaaPo/fullstackopen_homeworks/commits/master/osa1_doc">vaaPo</a></div>
    )
  }
 


//step3-user_components in App
const App = () => {
    const now = new Date() //step2-add_consts
    const a = 10           //step2-add_consts
    const b = 20           //step2-add_consts
    const nimi = 'Pekka'    //step5-2props
    const ika = 10          //step5-2props
    const x = 1             //step8-javascript-vars-console
    let y = 5               //step8-javascript-vars-console
    console.log('step8-javascript-vars-console')
    console.log(x, y)  // step8-javascript-vars-console tulostuu 1, 5
    y += 10
    console.log(x, y)  // step8-javascript-vars-console tulostuu 1, 15
    y = 'teksti'
    console.log(x, y)  // step8-javascript-vars-console tulostuu 1, teksti
    //x = 4            // step8-javascript-vars-consoleaiheuttaa virheen, koska x on const (vakio)

    console.log('step9-javascript-table')
    const t = [1, -1, 3]    //step9-javascript-table
    t.push(5)
    console.log(t.length)  // tulostuu 4
    console.log(t[1])      // tulostuu -1
    t.forEach((luku) => {
        console.log(luku)    // tulostuu 1, -1, 3 ja 5 omille riveilleen
    })
    t[6] = 99
    console.log(t)         // tulostuu [ 1, -1, 3, 5, <2 empty items>, 99 ]

    console.log('step10-javascript-map')
    const t2 = [1, 2, 3, 4]

    const m1 = t2.map((luku) => luku * 2)
    console.log(m1) // tulostuu [2, 4, 6, 8]
    
    const m2 = t2.map((luku) => '<li>' + luku + '</li>')
    console.log(m2) // tulostuu [ '<li>1</li>', '<li>2</li>', '<li>3</li>', '<li>4</li>' ]
    
    console.log('step11-javascript-destructuroiva-sijoitus')
    const t3 = [1, 2, 3, 4, 5]
    const [eka, toka, ...loput] = t3
    console.log(eka, toka)      // tulostuu 1, 2
    console.log(loput)          // tulostuu [3, 4 ,5]

    console.log('step12-olioliteraalit')
    const olio1 = {
        nimi: 'Arto Hellas',
        ika: 35,
        koulutus: 'Filosofian tohtori'
      }
      
      const olio2 = {
        nimi: 'Full Stack -websovelluskehitys',
        taso: 'aineopinto',
        laajuus: 5
      }
      
      const olio3 = {
        nimi: {
          etunimi: 'Jami',
          sukunimi: 'Kousa'
        },
        arvosanat: [2, 3, 5, 3],
        laitos: 'TKTL'
      }
    console.log(olio1.nimi)          // tulostuu Arto Hellas
    const kentanNimi = 'ika'
    console.log(olio1[kentanNimi])   // tulostuu 35

    console.log('step13-oliolle-lennosta-fields')
    olio1.osoite = 'Tapiola'
    olio1['salainen numero'] = 12341

    const kentanNimi2 = 'osoite'
    console.log(olio1[kentanNimi2])   // 
    const kentanNimi3 = 'salainen numero'
    console.log(olio1[kentanNimi3])   // 

    console.log('step14-arrow-functions')

    const summa = (p1, p2) => {
      console.log(p1)
      console.log(p2)
      return p1 + p2
    }
    const vastaus = summa(1,5)
    console.log(vastaus)

    console.log('step15-arrow-functions-short-without-curly')
    const neliox = p => {
        console.log(p)
        return p * p
      }
    console.log(neliox(3))

    const nelio = p => p * p
    console.log(nelio(4))

    const tn=[1,2,3]
    tn.forEach((luku) => {
        console.log(luku)    
    })

    const tnelio=tn.map(p => p*p)
    tnelio.forEach((luku) => {
        console.log(luku)    
    })
 
    function tulo(a, b) {
        return a * b
      }
      
    const vastaus2 = tulo(2, 6)
    console.log(vastaus2)      

    const keskiarvo = function(a, b) {
        return (a + b) / 2
      }
      
    const vastaus3 = keskiarvo(2, 5)
    console.log(vastaus3)      
      

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
                            //step5-2props                            <Hello_w_2props name="Arto" age={26 + 10} />
                            <Hello_w_2props name={nimi} age={ika} />
                            <div id="step6">
                                <footer_err />
                                <div id="step7">
                                <Footer />
                                <div id="step8">
                                    //step8-javascript-vars-console
                                    <br></br>
                                    //console.log(x, y)  // tulostuu 1, 5
                                    <br></br>
                                    //y += 10
                                    <br></br>
                                    //console.log(x, y)  // tulostuu 1, 15
                                    <br></br>
                                    //y = 'teksti'
                                    <br></br>
                                    //console.log(x, y)  // tulostuu 1, teksti
                                    <br></br>
                                    //x = 4              // aiheuttaa virheen
                                    <br></br>
                                    <div id="step9">
                                    </div>
                                </div>
                                </div>
                            </div>
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
