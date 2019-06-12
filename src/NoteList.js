import React, { Fragment, useState } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Box from "@material-ui/core/Box";
import InfoIcon from "@material-ui/icons/Info";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

import noteReducer from "./reducers/noteReducer";
import { FormMode } from "./reducers/noteActions";
import Note from "./Note";
import NoteForm from "./NoteForm";
import NoteView from "./NoteView";
import sortCategories from "./sortCategories";
import useLocalStorageStateReducer from "./hooks/useLocalStorageStateReducer";

const useStyles = makeStyles(theme => ({
  noteListButton: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center"
  }
}));

export default function NoteList(props) {
  const classes = useStyles();

  const initialNotes = [
    {
      id: "1",
      noteTitle: "theFirstNoteIsTooLongAndIdoNotKnowWhatToSay",
      noteText: "some text 1",
      createdAt: 1520230132000,
      updatedAt: 1520230132000,
      completed: false
    },
    {
      id: "2",
      noteTitle: "the second note is also long too and i dont know what to say",
      noteText: "some text 2",
      createdAt: 1540235202000,
      updatedAt: 1540235202000,
      completed: false
    },
    {
      id: "3",
      noteTitle: "note3",
      noteText: "some text 3",
      createdAt: 1560239232000,
      updatedAt: 1560239232000,
      completed: false
    }
  ];

  const [notes, dispatch] = useLocalStorageStateReducer(
    "notes",
    initialNotes,
    noteReducer
  );
  console.log(notes);
  const [formMode, setFormMode] = useState(FormMode.CLOSED);
  const [editId, setEditId] = useState(null);
  const [viewId, setViewId] = useState(null);
  console.log(formMode, editId, viewId);

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
            color="secondary"
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
      {renderNoteForm()}
      {renderNoteView()}
    </div>
  );
}
