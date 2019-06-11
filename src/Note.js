import React, { Fragment } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

import { deleteNote } from "./reducers/noteActions";

const useStyles = makeStyles(() => ({
  noteText: {
    display: "block"
  }
}));

export default function Note(props) {
  const classes = useStyles();

  const handleDeleteClick = () => {
    props.noteDispatch(deleteNote(props.id));
  };

  const handleEditClick = () => {
    props.onEditFormClick(props.id);
  };

  return (
    <ListItem button className="Note">
      <ListItemIcon>
        <Checkbox />
      </ListItemIcon>
      <ListItemText
        primary={props.noteTitle}
        secondary={
          <Fragment>
            <Typography
              component="span"
              variant="body1"
              color="secondary"
              className={classes.noteText}
            >
              {props.noteText}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Last updated 10 minutes ago
            </Typography>
          </Fragment>
        }
      />
      <ListItemSecondaryAction>
        <IconButton onClick={handleEditClick}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
