import React from 'react';

const NoteRow = ({ note }) => {
  return (
    <li>{note.content}</li>
  );
};

export default NoteRow;
