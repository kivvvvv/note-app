import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";

import NoteList from "./NoteList";

export default function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Note App</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <NoteList />
      </Container>
    </div>
  );
}
