import React from 'react';
import PersonRow from './PersonRow';
console.log("FilterPersonsByName.js - loading");

const FilterPersonsByName = ({ searchstring,persons }) => {
    const hit=persons.filter(obj => {return obj.name.toUpperCase() === searchstring });
    console.log('FPBN searchstring',searchstring);
    console.log('FPBN persons',persons);
    console.log('FPBN hit',hit);
    return (
        <p><b>FilterPersonsByName:</b>{searchstring} {hit.map(person=><PersonRow key={person.id} person={person}/>)}</p>

    );
  };
  
export default FilterPersonsByName;
