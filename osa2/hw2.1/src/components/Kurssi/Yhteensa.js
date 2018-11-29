import React from 'react';

function Yhteensa(props) {
    console.log("Yhteensa.js - loading");
    console.log("  Yhteensa.js - props", props);
    const summa = {
        hwtot : 0,
        osatot : 0
    };

    props.kurssi.osat.forEach((osa) => {
        summa.hwtot=summa.hwtot+osa.tehtavia;
        summa.osatot=summa.osatot+1;
        console.log('osa.id:', osa.id,'osa.tehtavia:',osa.tehtavia,'summa.hwtot:', summa.hwtot,'summa.osatot:',summa.osatot,'osa.nimi:', osa.nimi); 
      });
    console.log("Yhteensa.js - just before return", summa.hwtot, summa.osatot);

    return (
    <div id="summaosa">
        <h3>Yhteensä tehtäviä {summa.hwtot} kappaletta kurssin {summa.osatot} osassa</h3>
    </div>
    );
};

export default Yhteensa;
