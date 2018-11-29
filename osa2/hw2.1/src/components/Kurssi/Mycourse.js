import React from 'react';
import Otsikko from './Otsikko';
import Sisalto from './Sisalto';
import Yhteensa from './Yhteensa';


//function Mycourse(props) {
//const Mycourse = (props) => {
/**
const Mycourse = ({kurssi}) => {
    console.log("Mycourse.js loading");
//    const ots=Otsikko(props);
    const yht=Yhteensa(kurssi);
    const rivit=Sisalto(kurssi);
    return (<div id="ots"> <h1>Otsikko with ./components/Otsikko</h1>
        {kurssi.map(otsake=><Otsikko otsake={otsake}/>)}
            <div id="rivit">{rivit}
                <div id="yht">{yht}</div>
            </div>
            </div>
    )
};
 */
console.log("MyCourse.js - loading");

function Mycourse(props) {
        console.log("MyCourse.js - props", props);
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

export default Mycourse;
          