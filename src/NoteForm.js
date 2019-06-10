import React from "react";

import { addNote, FormMode } from "./reducers/noteActions";
import useInputState from "./hooks/useInputState";

export default function NoteForm(props) {
  let initialNoteTitle = "";
  let inititalNoteText = "";
  if (props.mode === FormMode.EDITING) {
    initialNoteTitle = props.noteTitle;
    inititalNoteText = props.noteText;
  }

  const [noteTitle, handleNoteTitleChange, resetNoteTitle] = useInputState(
    initialNoteTitle
  );
  const [noteText, handleNoteTextChange, resetNoteText] = useInputState(
    inititalNoteText
  );

  const handleSubmit = e => {
    e.preventDefault();

    if (props.mode === FormMode.CREATING) {
      props.noteDispatch(addNote(noteTitle, noteText));
    }

    resetNoteTitle();
    resetNoteText();

    props.onCloseFormClick();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="noteTitle"
        id="noteTitle"
        placeholder="Note title"
        value={noteTitle}
        onChange={handleNoteTitleChange}
      />
      <textarea
        name="noteText"
        id="noteText"
        placeholder="Enter note.."
        value={noteText}
        onChange={handleNoteTextChange}
      />
      <button>CREATE</button>
    </form>
  );
}
