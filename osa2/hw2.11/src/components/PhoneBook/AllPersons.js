import React from 'react';
import PhoneBook from './PhoneBook';
console.log("AllPersons.js - loading");

const AllPersons = ({ persons }) => {
    const hit=persons;

    return (
        <p>ALL- {hit.map(person=><PhoneBook key={person.id} person={person}/>)}</p>
    );
  };
  
export default AllPersons;