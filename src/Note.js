import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { deleteNote } from "./reducers/noteActions";

export default function Note(props) {
  const handleDeleteClick = () => {
    props.noteDispatch(deleteNote(props.id));
  };

  const handleEditClick = () => {
    props.onEditFormClick(props.id);
  };

  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox />
      </ListItemIcon>
      <ListItemText primary={props.noteTitle} secondary={props.noteText} />
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
