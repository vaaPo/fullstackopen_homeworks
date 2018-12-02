import React from 'react';
import PhoneBook from './PhoneBook';
console.log("FilterPersonsByString.js - loading");

const FilterPersonsByString = ({ searchstring,persons }) => {
    const hit=persons.filter(obj => {return obj.name.toUpperCase().includes(searchstring) });

    console.log('FPBS searchstring',searchstring);
    console.log('FPBS persons',persons);
    console.log('FPBS hit',hit);
    return (
        <p>FPBS-{searchstring} {hit.map(person=><PhoneBook key={person.id} person={person}/>)}</p>

    );
  };
  
export default FilterPersonsByString;
