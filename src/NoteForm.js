import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

import { addNote, editNote, FormMode } from "./reducers/noteActions";
import useInputState from "./hooks/useInputState";

export default function NoteForm(props) {
  let initialNoteTitle = "";
  let inititalNoteText = "";
  if (props.mode === FormMode.EDITING) {
    initialNoteTitle = props.noteTitle;
    inititalNoteText = props.noteText;
  }

  const [noteTitle, handleNoteTitleChange, resetNoteTitle] = useInputState(
    initialNoteTitle
  );
  const [noteText, handleNoteTextChange, resetNoteText] = useInputState(
    inititalNoteText
  );

  const handleSubmit = e => {
    e.preventDefault();

    switch (props.mode) {
      case FormMode.CREATING:
        props.noteDispatch(addNote(noteTitle, noteText));
        break;
      case FormMode.EDITING:
        props.noteDispatch(editNote(props.id, noteTitle, noteText));
        break;
      default:
        break;
    }

    resetNoteTitle();
    resetNoteText();

    props.onCloseFormClick();
  };

  const handleCancelClick = () => {
    props.onCloseFormClick();
  };

  return (
    <Dialog open={true} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Create new Note</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To create a new note, please enter its title and detail below.
        </DialogContentText>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          autoFocus
          label="Title"
          placeholder="Give a title"
          value={noteTitle}
        />
        <TextField
          variant="outlined"
          rows="4"
          margin="normal"
          fullWidth
          multiline
          label="Detail"
          placeholder="Start writing your note here"
          value={noteText}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary">
          {props.mode === FormMode.CREATING ? "CREATE" : "SAVE"}
        </Button>
        <Button color="primary">CANCEL</Button>
      </DialogActions>
    </Dialog>
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     name="noteTitle"
    //     id="noteTitle"
    //     placeholder="Note title"
    //     value={noteTitle}
    //     onChange={handleNoteTitleChange}
    //   />
    //   <textarea
    //     name="noteText"
    //     id="noteText"
    //     placeholder="Enter note.."
    //     value={noteText}
    //     onChange={handleNoteTextChange}
    //   />
    //   <button type="submit">
    //     {props.mode === FormMode.CREATING ? "CREATE" : "SAVE"}
    //   </button>
    //   <button type="button" onClick={handleCancelClick}>
    //     CANCEL
    //   </button>
    // </form>
  );
}
