export const DELETE_NOTE = "DELETE_NOTE";
export const ADD_NOTE = "ADD_NOTE";

export function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    id
  };
}

export function addNote(noteTitle, noteText) {
  return {
    type: ADD_NOTE,
    noteTitle,
    noteText
  };
}
