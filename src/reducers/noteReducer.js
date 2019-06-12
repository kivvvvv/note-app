import uuid from "uuid/v4";
import moment from "moment";

import { DELETE_NOTE, ADD_NOTE, EDIT_NOTE, TOGGLE_NOTE } from "./noteActions";

export default (state, action) => {
  const unixTimestamp = moment().valueOf();

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
          createdAt: unixTimestamp,
          updatedAt: unixTimestamp,
          completed: false
        }
      ];
    case EDIT_NOTE: {
      const currentNote = state.find(note => note.id === action.id);
      return [
        ...state.filter(note => note.id !== action.id),
        {
          ...currentNote,
          noteTitle: action.noteTitle,
          noteText: action.noteText,
          updatedAt: unixTimestamp
        }
      ];
    }
    case TOGGLE_NOTE: {
      const currentNote = state.find(note => note.id === action.id);
      return [
        ...state.filter(note => note.id !== action.id),
        { ...currentNote, completed: !currentNote.completed }
      ];
    }
    default:
      return state;
  }
};
