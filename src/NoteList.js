import React, { useReducer, useState } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

import noteReducer from "./reducers/noteReducer";
import { FormMode } from "./reducers/noteActions";
import Note from "./Note";
import NoteForm from "./NoteForm";
import NoteView from "./NoteView";

const useStyles = makeStyles(theme => ({
  noteListButton: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center"
  }
}));

export default function NoteList() {
  const classes = useStyles();

  const initialNotes = [
    {
      id: "1",
      noteTitle: "theFirstNoteIsTooLongAndIdoNotKnowWhatToSay",
      noteText: "some text 1",
      createdAt: 1560239232000,
      updatedAt: 1560239232000,
      completed: false
    },
    {
      id: "2",
      noteTitle: "the second note is also long too and i dont know what to say",
      noteText: "some text 2",
      createdAt: 1560239232000,
      updatedAt: 1560239232000,
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

  const [notes, dispatch] = useReducer(noteReducer, initialNotes);
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

  return (
    <div className="NoteList">
      <Paper>
        <List>
          {notes.map((note, noteIndex) => (
            <>
              <Note
                key={note.id}
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
            </>
          ))}
        </List>
      </Paper>
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
