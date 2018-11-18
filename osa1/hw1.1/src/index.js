import React from 'react';
import ReactDOM from 'react-dom';

//### HW1.1   jako komponenteiksi: Otsikko, Sisalto, Yhteensa

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi}</h1>
        </div>
    );
};

const Sisalto = (props) => {
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

/** tobe rakenne */
// * Kaikki data pidetään edelleen komponentissa App, joka välittää tarpeelliset tiedot kullekin komponentille props:ien avulla. 

return (
    <div>
      <Otsikko kurssi="Half Stack -sovelluskehitys" />
      <Sisalto osanro="1" osanimi="Reactin perusteet" tehtavalkm={10} />
      <Sisalto osanro="2" osanimi="Tiedonvälitys propseilla" tehtavalkm={7} />
      <Sisalto osanro="3" osanimi="Komponenttien tila" tehtavalkm={14} />
      <Yhteensa tehtavalkm={10+7+14} /> {/**ugly it is indeed! */}
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//orig
/**
  const kurssi = 'Half Stack -sovelluskehitys';
  const osa1 = 'Reactin perusteet';
  const tehtavia1 = 10;
  const osa2 = 'Tiedonvälitys propseilla';
  const tehtavia2 = 7;
  const osa3 = 'Komponenttien tila';
  const tehtavia3 = 14;

    return (
    <div>
      <h1>{kurssi}</h1>
      <p>{osa1} {tehtavia1}</p>
      <p>{osa2} {tehtavia2}</p>
      <p>{osa3} {tehtavia3}</p>
      <p>yhteensä {tehtavia1 + tehtavia2 + tehtavia3} tehtävää</p>
    </div>
  );
 */
