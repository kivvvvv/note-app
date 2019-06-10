import React, { useReducer } from "react";

import noteReducer from "./reducers/noteReducer";
import Note from "./Note";
import NoteForm from "./NoteForm";

export default function NoteList() {
  const initialNotes = [
    { id: "1", noteTitle: "note1", noteText: "some text 1" },
    { id: "2", noteTitle: "note2", noteText: "some text 2" },
    { id: "3", noteTitle: "note3", noteText: "some text 3" }
  ];

  const [notes, dispatch] = useReducer(noteReducer, initialNotes);

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
          />
        ))}
      </ul>
      <div>
        <NoteForm noteDispatch={dispatch} />
      </div>
    </div>
  );
}
