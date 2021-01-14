import { BaseCSSProperties } from "@material-ui/core/styles/withStyles"
import { makeStyles, Theme } from "@material-ui/core/styles"

export interface StyleProps {
  registerButton: BaseCSSProperties
  loginButton: BaseCSSProperties
  loginForgottenPassworn: BaseCSSProperties
}

export const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  registerButton: {
    backgroundColor: "#8e422a",
    color: "#fff",
    fontSize: "18px",
    fontWeight: 700,
    textTransform: "none",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#9e422a",
    },
    "&:active": {
      outline: "none",
    },
  },
  loginButton: {
    backgroundColor: "#8e422a",
    color: "#fff",
    fontSize: "18px",
    fontWeight: 700,
    textTransform: "none",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#9e422a",
    },
    "&:active": {
      outline: "none",
    },
    width: "100%",
  },
  loginForgottenPassworn: {
    backgroundColor: "#a3723d",
    color: "#fff",
    fontSize: "18px",
    fontWeight: 700,
    textTransform: "none",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#a3723d",
    },
    "&:active": {
      outline: "none",
      border: "none",
    },
    width: "100%",
  },
}))
