import { BaseCSSProperties } from "@material-ui/core/styles/withStyles"
import { makeStyles, Theme } from "@material-ui/core/styles"

export interface StyleProps {
  formInputSeperator: BaseCSSProperties
  formInputTitle: BaseCSSProperties
}

export const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  formInputTitle: {
    color: "white",
    fontSize: "20px",
  },
  formInputSeperator: {
    height: "2px",
    background: "#866441",
    margin: "25px 0",
  },
}))
