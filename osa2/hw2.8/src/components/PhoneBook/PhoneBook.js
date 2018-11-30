import React from 'react';

const PhoneBook = ({ person }) => {
  return (
    <li>{person.id} {person.phonenumber} {person.name}</li>
  );
};

export default PhoneBook;