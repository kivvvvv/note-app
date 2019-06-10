import React from "react";

import { deleteNote } from "./reducers/noteActions";

export default function Note(props) {
  const handleDeleteClick = () => {
    props.noteDispatch(deleteNote(props.id));
  };

  return (
    <li>
      <div>{props.noteTitle}</div>
      <div>{props.noteText}</div>
      <button>EDIT</button>
      <button onClick={handleDeleteClick}>DELETE</button>
    </li>
  );
}
