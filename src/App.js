import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

import NoteList from "./NoteList";
import sortCategories from "./sortCategories";

const useStyles = makeStyles(theme => ({
  appBar: {
    alignItems: "center",
    height: theme.spacing(10)
  },
  toolBar: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "40vw"
    },
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  },
  title: {
    fontWeight: 700
  },
  subTitle: {
    fontWeight: theme.typography.fontWeightLight
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  inputLable: {
    color: "white"
  },
  container: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: "40vw"
    },
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  }
}));

export default function App() {
  const classes = useStyles();

  const [sortedBy, setSortedBy] = useState(sortCategories.lastEdited);

  const handleChange = e => {
    setSortedBy(e.target.value);
  };

  return (
    <div className="App">
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div>
            <Typography variant="h5" className={classes.title}>
              Note App
            </Typography>
            <Typography variant="subtitle2" className={classes.subTitle}>
              Your virtual memory, powered by React.
            </Typography>
          </div>
          <FormControl className={classes.formControl}>
            <InputLabel
              shrink
              focused={false}
              htmlFor="age-label-placeholder"
              className={classes.inputLable}
            >
              Sorted by
            </InputLabel>
            <Select
              value={sortedBy}
              onChange={handleChange}
              input={<Input name="age" id="age-label-placeholder" />}
              displayEmpty
              name="age"
            >
              <MenuItem value={sortCategories.lastEdited}>
                {sortCategories.lastEdited}
              </MenuItem>
              <MenuItem value={sortCategories.recentlyCreated}>
                {sortCategories.recentlyCreated}
              </MenuItem>
              <MenuItem value={sortCategories.completed}>
                {sortCategories.completed}
              </MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>
        <Box my={2}>
          <NoteList sortedBy={sortedBy} />
        </Box>
      </Container>
    </div>
  );
}
