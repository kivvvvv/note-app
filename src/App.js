import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  FormControl,
  InputLabel,
  Select,
  Input,
  MenuItem
} from "@material-ui/core";

import NoteList from "./NoteList";
import sortCategories from "./sortCategories";

import useStyles from "./styles/AppStyles";

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
