import React from 'react';

const PersonRow = ({ person }) => {
  return (
    <li>{person.id} {person.phonenumber} {person.name}</li>
  );
};

export default PersonRow;