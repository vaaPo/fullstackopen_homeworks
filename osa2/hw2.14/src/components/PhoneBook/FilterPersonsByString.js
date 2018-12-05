import React from 'react';
import PersonRow from './PersonRow';
console.log("FilterPersonsByString.js - loading");

const FilterPersonsByString = ({ searchstring,persons }) => {
    const hit=persons.filter(obj => {return obj.name.toUpperCase().includes(searchstring) });

    console.log('FPBS searchstring',searchstring);
    console.log('FPBS persons',persons);
    console.log('FPBS hit',hit);
    return (
        <p><b>FilterPersonsByString:</b>{searchstring} {hit.map(person=><PersonRow key={person.id} person={person}/>)}</p>

    );
  };
  
export default FilterPersonsByString;
