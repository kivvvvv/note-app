import React from "react";

import { deleteNote } from "./reducers/noteActions";

export default function Note(props) {
  const handleDeleteClick = () => {
    props.noteDispatch(deleteNote(props.id));
  };

  const handleEditClick = () => {
    props.onEditFormClick(props.id);
  };

  return (
    <li>
      <div>{props.noteTitle}</div>
      <div>{props.noteText}</div>
      <button onClick={handleEditClick}>EDIT</button>
      <button onClick={handleDeleteClick}>DELETE</button>
    </li>
  );
}
