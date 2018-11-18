import React from 'react';
import ReactDOM from 'react-dom';

//### HW1.4   oliot taulukkoon: kolmen olion sijaan tee osat-olio missä taulukossa osa1-3


const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi}</h1>
        </div>
    );
};

// ToBe HW1.2
const Osa = (props) => {
    return (
        <div>
            <p>{props.osanro} {props.osanimi} {props.tehtavalkm}</p>
        </div>
    );
};

const Yhteensa = (props) => {
    return (
        <div>
            <p>yhteensä {props.tehtavalkm} tehtävää</p>
        </div>
    );
};

const App = () => {

    /** tobe rakenne HW1.3*/
    const kurssi = 'Half Stack -sovelluskehitys';

    const osa1 = {
    nro: 1,
    nimi: 'Reactin perusteet',
    tehtavia: 10
    };
    const osa2 = {
    nro: 2,
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
    };
    const osa3 = {
    nro: 3,
    nimi: 'Komponenttien tila',
    tehtavia: 14
    };
    // * Kaikki data pidetään edelleen komponentissa App, joka välittää tarpeelliset tiedot kullekin komponentille props:ien avulla. 
    const Sisalto = () => {
        return (
        <div>
        <Osa osanro={osa1.nro} osanimi={osa1.nimi} tehtavalkm={osa1.tehtavia} />
        <Osa osanro={osa2.nro} osanimi={osa2.nimi} tehtavalkm={osa2.tehtavia} />
        <Osa osanro={osa3.nro} osanimi={osa3.nimi} tehtavalkm={osa3.tehtavia} />
        </div>
        );
    };

return (
    <div id="hw"> <h1>### HW1.4   oliot taulukkoon: kolmen olion sijaan tee osat-olio missä taulukossa osa1-3</h1>
        <div id="mycourse">
        <Otsikko kurssi={kurssi} />
        <Sisalto />
        <Yhteensa tehtavalkm={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} /> {/**ugly it is indeed! */}
        </div>
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
