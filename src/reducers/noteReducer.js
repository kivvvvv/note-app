import { DELETE_NOTE } from "./noteActions";

export default (state, action) => {
  switch (action.type) {
    case DELETE_NOTE:
      return state.filter(note => note.id !== action.id);
    default:
      return state;
  }
};
