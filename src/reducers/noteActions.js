export const DELETE_NOTE = "DELETE_NOTE";

export function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    id
  };
}
