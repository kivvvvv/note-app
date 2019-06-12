import uuid from "uuid/v4";

import { DELETE_NOTE, ADD_NOTE, EDIT_NOTE, TOGGLE_NOTE } from "./noteActions";

export default (state, action) => {
  switch (action.type) {
    case DELETE_NOTE:
      return state.filter(note => note.id !== action.id);
    case ADD_NOTE:
      return [
        ...state,
        {
          id: uuid(),
          noteTitle: action.noteTitle,
          noteText: action.noteText,
          createdAt: action.createdAt,
          updatedAt: action.updatedAt
        }
      ];
    case EDIT_NOTE:
      return [
        ...state.filter(note => note.id !== action.id),
        {
          id: action.id,
          noteTitle: action.noteTitle,
          noteText: action.noteText,
          createdAt: action.createdAt,
          updatedAt: action.updatedAt
        }
      ];
    case TOGGLE_NOTE:
      const currentNote = state.find(note => note.id === action.id);
      return [
        ...state.filter(note => note.id !== action.id),
        { ...currentNote, completed: !currentNote.completed }
      ];
    default:
      return state;
  }
};
