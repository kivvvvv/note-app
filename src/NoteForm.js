import React from "react";

import { addNote, editNote, FormMode } from "./reducers/noteActions";
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

    switch (props.mode) {
      case FormMode.CREATING:
        props.noteDispatch(addNote(noteTitle, noteText));
        break;
      case FormMode.EDITING:
        props.noteDispatch(editNote(props.id, noteTitle, noteText));
        break;
      default:
        break;
    }

    resetNoteTitle();
    resetNoteText();

    props.onCloseFormClick();
  };

  const handleCancelClick = () => {
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
      <button type="submit">
        {props.mode === FormMode.CREATING ? "CREATE" : "SAVE"}
      </button>
      <button type="button" onClick={handleCancelClick}>
        CANCEL
      </button>
    </form>
  );
}
