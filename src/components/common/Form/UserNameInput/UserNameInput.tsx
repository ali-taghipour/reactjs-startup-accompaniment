import React from "react"
import Grid from "@material-ui/core/Grid"
import FormInputFieldBlock from "../FormInputFieldBlock"

import { StyleProps } from "./UserNameInput.styles"
import { useStyles } from "./UserNameInput.styles"

type PropsClasses = Record<keyof StyleProps, string>

type properties = {
  errors: any
  touched: any
  notStar?: boolean
}

const UserNameInput: React.FC<properties> = (props) => {
  const classes: PropsClasses = useStyles({} as StyleProps)

  return (
    <Grid item container direction="column">
      <Grid item>
        <label className={classes.formInputTitle} htmlFor={"username"}>
          {props.notStar ? undefined : (
            <span style={{ color: "red", fontSize: "2em" }}>*</span>
          )}
          نام کاربری
        </label>
      </Grid>
      <Grid item>
        <FormInputFieldBlock
          fieldType={"textInput"}
          name={"username"}
          errors={props.errors}
          touched={props.touched}
          placeholder={"Username"}
          height={"type1"}
          ltrDir={true}
        />
      </Grid>
      <Grid item>
        <div className={classes.formInputSeperator} />
      </Grid>
    </Grid>
  )
}

export default UserNameInput
