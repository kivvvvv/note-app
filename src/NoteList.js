import React from "react";
import Note from "./Note";

export default function NoteList() {
  const notes = [
    { id: "1", noteTitle: "note1", noteText: "some text 1" },
    { id: "2", noteTitle: "note2", noteText: "some text 2" },
    { id: "3", noteTitle: "note3", noteText: "some text 3" }
  ];

  return (
    <div>
      <h1>Note App</h1>
      <ul>
        {notes.map(note => (
          <Note noteTitle={note.noteTitle} noteText={note.noteText} />
        ))}
      </ul>
    </div>
  );
}
