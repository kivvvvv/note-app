import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { getLastUpdatedText, getDescriptiveDate } from "./utils";

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  dialogTitleActions: {
    position: "relative",
    top: theme.spacing(-2),
    right: theme.spacing(-3),
    padding: 0
  },
  closeButton: {
    color: theme.palette.grey[500]
  },
  noteTitle: {
    wordBreak: "break-all",
    whiteSpace: "pre-wrap"
  }
}));

export default function NoteView(props) {
  const classes = useStyles();
  return (
    <Dialog
      open={true}
      aria-labelledby="form-dialog-title"
      className={classes.root}
    >
      <DialogTitle disableTypography id="form-dialog-title">
        <DialogActions className={classes.dialogTitleActions}>
          <Chip
            color="secondary"
            label={`Created on ${getDescriptiveDate(props.createdAt)}`}
          />
          <IconButton aria-label="Close" className={classes.closeButton}>
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
        <Button color="primary">Save changes</Button>
      </DialogActions>
    </Dialog>
  );
}