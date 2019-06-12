import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
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
    [theme.breakpoints.up("md")]: {
      maxWidth: "40vw"
    },
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  },
  title: {
    fontWeight: 700
  },
  subTitle: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      fontWeight: theme.typography.fontWeightLight
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  inputLable: {
    color: "white"
  },
  container: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "40vw"
    },
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  }
}));
