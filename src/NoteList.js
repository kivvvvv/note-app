import React, { Fragment, useState } from "react";
import {
  Paper,
  List,
  Divider,
  Fab,
  Box,
  Chip,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  DialogTitle,
  Dialog
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InfoIcon from "@material-ui/icons/Info";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

import initialNotes from "./initialNotes";
import noteReducer from "./reducers/noteReducer";
import { FormMode } from "./reducers/noteActions";
import Note from "./Note";
import NoteForm from "./NoteForm";
import NoteView from "./NoteView";
import sortCategories from "./sortCategories";
import useLocalStorageStateReducer from "./hooks/useLocalStorageStateReducer";

import useStyles from "./styles/NoteListStyles";

export default function NoteList(props) {
  const classes = useStyles();

  const [notes, dispatch] = useLocalStorageStateReducer(
    "notes",
    initialNotes,
    noteReducer
  );
  const [formMode, setFormMode] = useState(FormMode.CLOSED);
  const [editId, setEditId] = useState(null);
  const [viewId, setViewId] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteId, setDeleteId] = useState({});

  const handleCreateFormClick = () => {
    setFormMode(FormMode.CREATING);
  };

  const handleCloseFormClick = () => {
    setFormMode(FormMode.CLOSED);
  };

  const handleEditFormClick = id => {
    setEditId(id);
    setFormMode(FormMode.EDITING);
  };

  const handleViewNoteClick = id => {
    setViewId(id);
  };

  const handleCloseViewNoteClick = () => {
    setViewId(null);
  };

  const handleEditViewNoteClick = id => {
    setViewId(null);
    setEditId(id);
    setFormMode(FormMode.EDITING);
  };

  const handleShowDeleteDialogClick = id => {
    setShowDeleteDialog(true);
    setDeleteId({
      id,
      confirm: false
    });
  };

  const handleHideDeleteDialogClick = () => {
    setShowDeleteDialog(false);
    setDeleteId({});
  };

  const handleConfirmDeleteClick = () => {
    setShowDeleteDialog(false);
    setDeleteId(prevDeleteId => {
      return {
        ...prevDeleteId,
        confirm: true
      };
    });
  };

  const renderNoteForm = () => {
    switch (formMode) {
      case FormMode.CLOSED:
        break;
      case FormMode.CREATING:
        return (
          <NoteForm
            noteDispatch={dispatch}
            onCloseFormClick={handleCloseFormClick}
            mode={formMode}
          />
        );
      case FormMode.EDITING:
        const editingNote = notes.find(note => note.id === editId);
        return (
          <NoteForm
            noteDispatch={dispatch}
            onCloseFormClick={handleCloseFormClick}
            mode={formMode}
            {...editingNote}
          />
        );
      default:
        setFormMode(FormMode.CLOSED);
        break;
    }
  };

  const renderNoteView = () => {
    if (viewId) {
      const viewingNote = notes.find(note => note.id === viewId);
      return (
        <NoteView
          {...viewingNote}
          onCloseViewNoteClick={handleCloseViewNoteClick}
          onEditViewNoteClick={handleEditViewNoteClick}
        />
      );
    }
  };

  const sortNotes = (notes, sortedBy) => {
    const unsortedNotes = [...notes];

    if (sortedBy === sortCategories.lastEdited)
      return unsortedNotes.sort((a, b) => {
        if (a.updatedAt > b.updatedAt) return -1;
        else if (a.updatedAt < b.updatedAt) return 1;
        else return 0;
      });
    else if (sortedBy === sortCategories.recentlyCreated)
      return unsortedNotes.sort((a, b) => {
        if (a.createdAt > b.createdAt) return -1;
        else if (a.createdAt < b.createdAt) return 1;
        else return 0;
      });
    else if (sortedBy === sortCategories.completed)
      return unsortedNotes.sort((a, b) => {
        return b.completed - a.completed;
      });
    else return unsortedNotes;
  };

  return (
    <div className="NoteList">
      {notes.length > 0 ? (
        <Paper>
          <List>
            {sortNotes(notes, props.sortedBy).map((note, noteIndex) => (
              <Fragment key={note.id}>
                <Note
                  id={note.id}
                  noteDispatch={dispatch}
                  noteTitle={note.noteTitle}
                  noteText={note.noteText}
                  noteUpdatedAt={note.updatedAt}
                  noteCompleted={note.completed}
                  onEditFormClick={handleEditFormClick}
                  onViewNoteClick={handleViewNoteClick}
                  onShowDeleteDialogClick={handleShowDeleteDialogClick}
                  onHideDeleteDialogClick={handleHideDeleteDialogClick}
                  noteWillDelete={deleteId.id === note.id && deleteId.confirm}
                />
                {noteIndex < notes.length - 1 ? <Divider /> : undefined}
              </Fragment>
            ))}
          </List>
        </Paper>
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center">
          <Chip
            icon={<InfoIcon />}
            variant="default"
            color="primary"
            label="Please add some note below"
          />
        </Box>
      )}

      <div className={classes.noteListButton}>
        <Fab
          color="primary"
          aria-label="Add a Note"
          onClick={handleCreateFormClick}
        >
          <AddIcon />
        </Fab>
      </div>
      <Dialog
        open={showDeleteDialog}
        aria-labelledby="delete-dialog-title"
        onClose={handleHideDeleteDialogClick}
      >
        <DialogTitle id="delete-dialog-title">Delete this note?</DialogTitle>
        <List>
          <ListItem button onClick={handleConfirmDeleteClick}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                <Check />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete" />
          </ListItem>
          <ListItem button onClick={handleHideDeleteDialogClick}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                <Close />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItem>
        </List>
      </Dialog>
      {renderNoteForm()}
      {renderNoteView()}
    </div>
  );
}
