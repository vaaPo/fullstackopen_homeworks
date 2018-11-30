import React from 'react';
import Otsikko from './Otsikko';
import Sisalto from './Sisalto';
import Yhteensa from './Yhteensa';

console.log("Kurssi.js - loading");

function Kurssi(props) {
    console.log("Kurssi.js - props", props);
    console.log("Kurssi.js - props.kurssi", props.kurssi);
    const parsikurssi = props.kurssi;
    console.log("Kurssi.js - parsikurssi", parsikurssi);
    const ots=Otsikko(props);
    const yht=Yhteensa(props);
    const osat=Sisalto(props);
    return (
        <div id="otsikko"><h2>{ots}</h2>
        <div id="osat">{osat}
        <div id="yhteensa">{yht}</div>  
        </div>
        </div>
        )
    };

export default Kurssi;
