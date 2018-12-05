import React from 'react';

const NoteRow = ({ note, toggleImportance }) => {
  const label=note.important ? 'make not important' : 'make important';
  return (
    <li>{note.content} <button onClick={toggleImportance}>{label}</button></li>
  );
};

export default NoteRow;
