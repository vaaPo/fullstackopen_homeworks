import React from 'react';
import ReactDOM from 'react-dom';

//### HW1.5   sovellus joka käyttää kurssi-oliota

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi}</h1>
        </div>
    );
};

const App = () => {

/** tobe rakenne HW1.5*/
    const kurssix = {
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

    const kurssi = 'Half Stack -sovelluskehitys';
    // TOBE HW1.4 rakenne
    const osax = [
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
      ];
    console.log(osax);

    const summat = {
        hwtot : 0,
    };
    console.log(summat);
    console.log(' yhteensä=' + summat.hwtot); 
    osax.forEach(function(item, index, array) {
        console.log(item, index);
    });
    
    osax.forEach(function(item, index, array) {
        console.log(item.id,item.nimi, item.tehtavia, index);
    });

    osax.forEach((rivi) => {
        summat.hwtot=summat.hwtot+rivi.tehtavia;
        console.log(rivi.id+' rivi arraysta osax '+ rivi.nimi,rivi.tehtavia +' yhteensä=' + summat.hwtot); 
      });
    console.log(' yhteensä=' + summat.hwtot); 

    function Sisaltox(props) {
        const content = props.osax.map((rivi) =>
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

    function Yhteensax(props) {
        const summax = {
            hwtot : 0,
        };
        props.osax.forEach((rivi) => {
            summax.hwtot=summax.hwtot+rivi.tehtavia;
            console.log('Yhteensax: ' + rivi.id+' rivi arraysta osax '+ rivi.nimi,rivi.tehtavia +' yhteensä=' + summax.hwtot); 
          });
        return (
        <div id="summarivi">
            <h3>Yhteensä tehtäviä {summax.hwtot} kappaletta</h3>
        </div>
        );
    };


return (
    <div id="hw"> <h1>### HW1.5   sovellus joka käyttää kurssi-oliota</h1>
        <div id="mycourse">
        <Otsikko kurssi={kurssi} />
        <Sisaltox osax={osax}/>
        <Yhteensax osax={osax}/>
        </div>
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
