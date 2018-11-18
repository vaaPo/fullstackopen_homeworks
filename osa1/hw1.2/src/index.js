import React from 'react';
import ReactDOM from 'react-dom';

//### HW1.2   lisää komponentteja: Sisaltoon kolme Osa-komponenttia

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
