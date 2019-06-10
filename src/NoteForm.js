import React, { useState } from "react";
import { addNote } from "./reducers/noteActions";

export default function NoteForm(props) {
  const [noteTitle, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  const handleNoteTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleNoteTextChange = e => {
    setNoteText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.noteDispatch(addNote(noteTitle, noteText));
    setTitle("");
    setNoteText("");
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
