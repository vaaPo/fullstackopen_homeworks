import React from 'react';
import Otsikko from './Otsikko';
import Sisalto from './Sisalto';
import Yhteensa from './Yhteensa';

console.log("Kurssi.js - loading");

function Kurssi(props) {
        console.log("Kurssi.js - props", props);
        const ots=Otsikko(props);
        const yht=Yhteensa(props);
        const osat=Sisalto(props);
        return (
            <div id="otsikko">{ots}
                <div id="osat">{osat}
                    <div id="yhteensa">{yht}</div>
                </div>
            </div>
        )
    };

export default Kurssi;
          