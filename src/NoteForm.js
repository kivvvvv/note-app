import React from "react";

import { addNote } from "./reducers/noteActions";
import useInputState from "./hooks/useInputState";

export default function NoteForm(props) {
  const [noteTitle, handleNoteTitleChange, resetNoteTitle] = useInputState("");
  const [noteText, handleNoteTextChange, resetNoteText] = useInputState("");

  const handleSubmit = e => {
    e.preventDefault();

    props.noteDispatch(addNote(noteTitle, noteText));

    resetNoteTitle();
    resetNoteText();
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
