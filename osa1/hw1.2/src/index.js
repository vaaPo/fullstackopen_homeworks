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

/** tobe rakenne */
// * Kaikki data pidetään edelleen komponentissa App, joka välittää tarpeelliset tiedot kullekin komponentille props:ien avulla. 
const Sisalto = () => {
    return (
      <div>
      <Osa osanro="1" osanimi="Reactin perusteet" tehtavalkm={10} />
      <Osa osanro="2" osanimi="Tiedonvälitys propseilla" tehtavalkm={7} />
      <Osa osanro="3" osanimi="Komponenttien tila" tehtavalkm={14} />
      </div>
    );
};

return (
    <div>
      <Otsikko kurssi="Half Stack -sovelluskehitys" />
      <Sisalto />
      <Yhteensa tehtavalkm={10+7+14} /> {/**ugly it is indeed! */}
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


/** orig
const Sisalto = (props) => {
    return (
        <div>
            <p>{props.osanro} {props.osanimi} {props.tehtavalkm}</p>
        </div>
    );
};
*/
