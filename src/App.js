import React from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import NoteList from "./NoteList";

const useStyles = makeStyles(theme => ({
  appBar: {
    alignItems: "center",
    height: theme.spacing(10)
  },
  toolBar: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "45vw"
    }
  },
  title: {
    fontWeight: 700
  },
  subTitle: {
    fontWeight: theme.typography.fontWeightLight
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h5" className={classes.title}>
            Note App
          </Typography>
          <Typography variant="subtitle2" className={classes.subTitle}>
            Your virtual memory, powered by React.
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box my={2}>
          <NoteList />
        </Box>
      </Container>
    </div>
  );
}
