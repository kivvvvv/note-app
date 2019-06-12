import React, { Fragment, useState } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  Checkbox,
  IconButton,
  Slide
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { deleteNote, toggleNote } from "./reducers/noteActions";
import { getLastUpdatedText } from "./utils";

import useStyles from "./styles/NoteStyles";

export default function Note(props) {
  const classes = useStyles(props);

  const [isInSlide, setIsInSlide] = useState(true);

  const handleDeleteClick = () => {
    Promise.resolve(setIsInSlide(false)).then(() => {
      setTimeout(() => props.noteDispatch(deleteNote(props.id)), 225);
    });
  };

  const handleEditClick = () => {
    props.onEditFormClick(props.id);
  };

  const handleViewClick = () => {
    props.onViewNoteClick(props.id);
  };

  const handleToggleClick = e => {
    e.stopPropagation();
    props.noteDispatch(toggleNote(props.id));
  };

  const getSummaryText = noteText => {
    if (noteText.length >= 41) {
      return `${noteText.substring(0, 40)}...`;
    } else {
      return noteText;
    }
  };

  return (
    <Slide direction="left" in={isInSlide} mountOnEnter unmountOnExit>
      <ListItem
        button
        className={`Note ${classes.root}`}
        onClick={handleViewClick}
      >
        <ListItemIcon onClick={handleToggleClick}>
          <Checkbox edge="start" checked={props.noteCompleted} />
        </ListItemIcon>
        <ListItemText
          primary={
            <Fragment>
              <Typography className={classes.noteTitlePrimary}>
                {getSummaryText(props.noteTitle)}
              </Typography>
            </Fragment>
          }
          secondary={
            props.noteCompleted ? null : (
              <Fragment>
                <Typography
                  component="span"
                  variant="body1"
                  color="secondary"
                  className={classes.noteTextSecondary}
                >
                  {getSummaryText(props.noteText)}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {getLastUpdatedText(props.noteUpdatedAt)}
                </Typography>
              </Fragment>
            )
          }
        />
        <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
          <IconButton edge="end" onClick={handleEditClick}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" onClick={handleDeleteClick}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Slide>
  );
}
