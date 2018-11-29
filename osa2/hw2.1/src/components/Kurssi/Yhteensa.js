import React from 'react';

function Yhteensa(props) {
    console.log("Yhteensa.js - loading");
    console.log("  Yhteensa.js - props", props);
    const summa = {
        hwtot : 0,
        osatot : 0
    };

    props.kurssi.osat.forEach((rivi) => {
        summa.hwtot=summa.hwtot+rivi.tehtavia;
        summa.osatot=summa.osatot+1;
        console.log('      Yhteensa: ', rivi.id,' rivi arraysta osa ', rivi.nimi,rivi.tehtavia,' yhteensä=', summa.hwtot,' osatot=',summa.osatot); 
      });
    console.log("    Yhteensa.js - just before return");

    return (
    <div id="summarivi">
        <h3>Yhteensä tehtäviä {summa.hwtot} kappaletta kurssin {summa.osatot} osassa</h3>
    </div>
    );
};

export default Yhteensa;
