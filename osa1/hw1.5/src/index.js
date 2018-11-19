import React from 'react';
import ReactDOM from 'react-dom';

//### HW1.5   sovellus joka käyttää kurssi-oliota


const App = () => {

/** tobe rakenne HW1.5*/
    const kurssix = {
        nimi: 'Half Stack -sovelluskehitys x',
        osat: [
              { id: 1,
                nimi: 'Reactin perusteet',
                tehtavia: 10
              },
              { id:2,
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
              },
              { id:3,
                nimi: 'Komponenttien tila',
                tehtavia: 14
              }
        ]
    };
    function Otsikkoxx(props) {
        const otsikko15 = (<div>
                            <h2>Otsikkoxx {props.kurssix.nimi}</h2>
                           </div>
        );
      return (
        <div id="otsikko15">
          <hr />
          {otsikko15}
        </div>
      );
    };
    function Sisaltoxx(props) {
        const content = props.kurssix.osat.map((rivi) =>
        <div key={rivi.id}>
          <p>{rivi.nimi} {rivi.tehtavia}</p>
        </div>
      );
      return (
        <div id="osat">
          <hr />
          {content}
        </div>
      );
    };

    function Yhteensaxx(props) {
        const summax = {
            hwtot : 0,
        };
        props.kurssix.osat.forEach((rivi) => {
            summax.hwtot=summax.hwtot+rivi.tehtavia;
            console.log('Yhteensax: ' + rivi.id+' rivi arraysta osax '+ rivi.nimi,rivi.tehtavia +' yhteensä=' + summax.hwtot); 
          });
        return (
        <div id="summarivi">
            <h3>Yhteensä tehtäviä {summax.hwtot} kappaletta</h3>
        </div>
        );
    };

    function Mycourse(props) {
        const ots=Otsikkoxx(props);
        const yht=Yhteensaxx(props);
        const rivit=Sisaltoxx(props);
        return (
            <div id="ots">{ots}
                <div id="rivit">{rivit}
                    <div id="yht">{yht}</div>
                </div>
            </div>
        )
    };

return (
    <div id="hw"> <h1>### HW1.5   sovellus joka käyttää kurssi-oliota</h1>
        <div id="mycourse">
        <Otsikkoxx kurssix={kurssix} />
        <Sisaltoxx kurssix={kurssix}/>
        <Yhteensaxx kurssix={kurssix}/>
        MYCOURSE
        <Mycourse kurssix={kurssix} />
        </div>
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
