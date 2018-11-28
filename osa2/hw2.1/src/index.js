import React from 'react';
import ReactDOM from 'react-dom';

//### HW2.1 komponenttirakenne  rewrite //### HW1.5   sovellus joka käyttää kurssi-oliota
/**
App
  Kurssi
    Otsikko
    Sisalto
      Osa
      Osa
 */

const App = () => {

/** tobe rakenne HW1.5*/
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
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
    function Otsikko(props) {
        const otsikko15 = (<div>
                            <h2>Otsikko {props.kurssi.nimi}</h2>
                           </div>
        );
      return (
        <div id="otsikko15">
          <hr />
          {otsikko15}
        </div>
      );
    };
    function Sisalto(props) {
        const content = props.kurssi.osat.map((rivi) =>
        <div key={rivi.id}>
          <p>{rivi.id} {rivi.nimi} {rivi.tehtavia}</p>
        </div>
      );
      return (
        <div id="osat">
          <hr />
          {content}
        </div>
      );
    };

    function Yhteensa(props) {
        const summa = {
            hwtot : 0,
            osatot : 0
        };
        props.kurssi.osat.forEach((rivi) => {
            summa.hwtot=summa.hwtot+rivi.tehtavia;
            summa.osatot=summa.osatot+1;
            console.log('Yhteensa: ' + rivi.id+' rivi arraysta osa '+ rivi.nimi,rivi.tehtavia +' yhteensä=' + summa.hwtot + ' osatot='+summa.osatot); 
          });
        return (
        <div id="summarivi">
            <h3>Yhteensä tehtäviä {summa.hwtot} kappaletta kurssin {summa.osatot} osassa</h3>
        </div>
        );
    };

    function Mycourse(props) {
        const ots=Otsikko(props);
        const yht=Yhteensa(props);
        const rivit=Sisalto(props);
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
        <Mycourse kurssi={kurssi} />
        </div>
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
