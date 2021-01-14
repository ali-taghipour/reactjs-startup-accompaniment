import { BaseCSSProperties } from "@material-ui/core/styles/withStyles"
import { makeStyles, Theme } from "@material-ui/core/styles"

import backLogo from "../../assets/images/registeration/back-logo.png"
import lines1 from "../../assets/images/registeration/lines1.svg"
import lines2 from "../../assets/images/registeration/lines2.svg"

export interface StyleProps {
  loginContainer: BaseCSSProperties
  loginFormContainer: BaseCSSProperties
}

export const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  loginContainer: {
    overflow: "hidden",
    direction: "rtl",
    background: `url(${backLogo}) right 50px top 50px no-repeat,
    url(${lines1}) left top -100px no-repeat,
    url(${lines2}) right bottom no-repeat,
    rgb(190,135,78)`,
    backgroundSize: "25em, 40%, 40%",
    [theme.breakpoints.down("sm")]: {
      background: `url(${backLogo}) top 50px center no-repeat,
    url(${lines2}) right bottom no-repeat,
    rgb(190,135,78)`,
      backgroundSize: "25em, 40em",
    },
    [theme.breakpoints.down("xs")]: {
      backgroundSize: "70%, 40em",
    },
  },
  loginFormContainer: {
    paddingTop: "250px",
    margin: "0 auto",
  },
}))
