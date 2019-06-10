import uuid from "uuid/v4";

import { DELETE_NOTE, ADD_NOTE } from "./noteActions";

export default (state, action) => {
  switch (action.type) {
    case DELETE_NOTE:
      return state.filter(note => note.id !== action.id);
    case ADD_NOTE:
      return [
        ...state,
        { id: uuid(), noteTitle: action.noteTitle, noteText: action.noteText }
      ];
    default:
      return state;
  }
};
