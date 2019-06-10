/*
 * action types
 */
export const DELETE_NOTE = "DELETE_NOTE";
export const ADD_NOTE = "ADD_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";

/*
 * action creators
 */
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

export function editNote(id, noteTitle, noteText) {
  return {
    type: EDIT_NOTE,
    id,
    noteTitle,
    noteText
  };
}

/*
 * other constants
 */
export const FormMode = {
  CLOSED: "CLOSED",
  CREATING: "CREATING",
  EDITING: "EDITING"
};
