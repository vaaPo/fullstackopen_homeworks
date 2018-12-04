import React from 'react';
import PersonRow from './PersonRow';
console.log("AllPersons.js - loading");

const AllPersons = ({ persons }) => {
    const hit=persons;

    return (
        <p>ALL- {hit.map(person=><PersonRow key={person.id} person={person}/>)}</p>
    );
  };
  
export default AllPersons;