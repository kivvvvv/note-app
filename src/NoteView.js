import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Chip,
  Typography,
  IconButton,
  Button,
  DialogActions
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import {
  getLastUpdatedText,
  getDescriptiveDate,
  getShortenDate
} from "./utils";

import useStyles from "./styles/NoteViewStyles";

export default function NoteView(props) {
  const classes = useStyles();
  const [isOpenNoteView, setIsOpenNoteView] = useState(true);

  const handleCloseClick = () => {
    Promise.resolve(setIsOpenNoteView(false)).then(() => {
      setTimeout(() => props.onCloseViewNoteClick(), 225);
    });
  };

  const handleEditClick = () => {
    Promise.resolve(setIsOpenNoteView(false)).then(() => {
      setTimeout(() => props.onEditViewNoteClick(props.id), 225);
    });
  };

  return (
    <Dialog
      open={isOpenNoteView}
      aria-labelledby="form-dialog-title"
      className={classes.root}
      onClose={handleCloseClick}
    >
      <DialogTitle disableTypography id="form-dialog-title">
        <DialogActions className={classes.dialogTitleActions}>
          <Chip
            color="secondary"
            className={classes.shortenDate}
            label={`Created on ${getShortenDate(props.createdAt)}`}
          />
          <Chip
            color="secondary"
            className={classes.descriptiveDate}
            label={`Created on ${getDescriptiveDate(props.createdAt)}`}
          />
          <IconButton
            aria-label="Close"
            className={classes.closeButton}
            onClick={handleCloseClick}
          >
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <Typography variant="h6" className={classes.noteTitle}>
          {props.noteTitle}
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>{props.noteText}</Typography>
      </DialogContent>
      <DialogActions>
        <Chip label={getLastUpdatedText(props.updatedAt)} />
        <Button color="primary" onClick={handleEditClick}>
          Go Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
