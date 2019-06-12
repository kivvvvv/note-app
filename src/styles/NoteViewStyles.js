import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      "& .MuiPaper-root": {
        width: "100%",
        height: "100%",
        margin: 0,
        maxWidth: "100%",
        maxHeight: "none",
        borderRadius: 0
      }
    }
  },
  dialogTitleActions: {
    position: "relative",
    top: theme.spacing(-2),
    right: theme.spacing(-3),
    padding: 0
  },
  closeButton: {
    color: theme.palette.grey[500]
  },
  noteTitle: {
    wordBreak: "break-all",
    whiteSpace: "pre-wrap"
  },
  shortenDate: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  descriptiveDate: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "inline-flex"
    }
  }
}));
