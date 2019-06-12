import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

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
  const [isOpenForm, setIsOpenForm] = useState(true);

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

    handleCancelClick();
  };

  const handleCancelClick = () => {
    Promise.resolve(setIsOpenForm(false)).then(() => {
      setTimeout(() => props.onCloseFormClick(), 225);
    });
  };

  const dialogMessageModes = {
    [FormMode.CREATING]: {
      dialogTitle: "Create new Note",
      dialogContentText:
        "To create your new note, please enter its title and detail below",
      submitButtonText: "CREATE"
    },
    [FormMode.EDITING]: {
      dialogTitle: "Edit Note",
      dialogContentText:
        "To edit your note, please change its title or detail below",
      submitButtonText: "SAVE"
    }
  };
  return (
    <Dialog
      open={isOpenForm}
      aria-labelledby="form-dialog-title"
      onClose={handleCancelClick}
    >
      <DialogTitle id="form-dialog-title">
        {dialogMessageModes[props.mode].dialogTitle}
      </DialogTitle>
      <ValidatorForm onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
            {dialogMessageModes[props.mode].dialogContentText}
          </DialogContentText>
          <TextValidator
            variant="outlined"
            margin="normal"
            fullWidth
            autoFocus
            label="Title"
            placeholder="Give a title"
            value={noteTitle}
            onChange={handleNoteTitleChange}
            validators={["required"]}
            errorMessages={["Please give some name to your note"]}
          />
          <TextValidator
            variant="outlined"
            margin="normal"
            fullWidth
            multiline
            rows="4"
            label="Detail"
            placeholder="Start writing your note here"
            value={noteText}
            onChange={handleNoteTextChange}
            validators={["required"]}
            errorMessages={["Please describe something about it"]}
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit" variant="contained" color="primary">
            {dialogMessageModes[props.mode].submitButtonText}
          </Button>
          <Button color="primary" onClick={handleCancelClick}>
            CANCEL
          </Button>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
}
