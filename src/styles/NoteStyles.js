import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    "& $noteTitlePrimary, & $noteTextSecondary": {
      wordBreak: "break-all",
      whiteSpace: "pre-wrap"
    }
  },
  noteTitlePrimary: {
    textDecoration: props => (props.noteCompleted ? "line-through" : "none")
  },
  noteTextSecondary: {
    display: "block"
  },
  listItemSecondaryAction: {
    display: props => (props.noteCompleted ? "none" : "block")
  }
}));
