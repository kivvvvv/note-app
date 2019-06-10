import React, { useReducer, useState } from "react";

import noteReducer from "./reducers/noteReducer";
import { FormMode } from "./reducers/noteActions";
import Note from "./Note";
import NoteForm from "./NoteForm";

export default function NoteList() {
  const initialNotes = [
    { id: "1", noteTitle: "note1", noteText: "some text 1" },
    { id: "2", noteTitle: "note2", noteText: "some text 2" },
    { id: "3", noteTitle: "note3", noteText: "some text 3" }
  ];

  const [notes, dispatch] = useReducer(noteReducer, initialNotes);
  console.log(notes);
  const [formMode, setFormMode] = useState(FormMode.CLOSED);

  const handleCreateFormClick = () => {
    setFormMode(FormMode.CREATING);
  };

  const handleCloseFormClick = () => {
    setFormMode(FormMode.CLOSED);
  };

  const renderNoteForm = () => {
    switch (formMode) {
      case FormMode.CLOSED:
        break;
      case FormMode.CREATING:
        return (
          <NoteForm
            noteDispatch={dispatch}
            onCloseFormClick={handleCloseFormClick}
            mode={formMode}
          />
        );
      default:
        setFormMode(FormMode.CLOSED);
        break;
    }
  };

  return (
    <div>
      <h1>Note App</h1>
      <ul>
        {notes.map(note => (
          <Note
            id={note.id}
            noteDispatch={dispatch}
            noteTitle={note.noteTitle}
            noteText={note.noteText}
            onCreateFormClick={handleCreateFormClick}
          />
        ))}
      </ul>
      <button onClick={handleCreateFormClick}>ADD NOTE</button>
      {renderNoteForm()}
    </div>
  );
}
