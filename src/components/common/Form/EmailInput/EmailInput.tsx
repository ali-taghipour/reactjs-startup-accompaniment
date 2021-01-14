import React from "react"
import Grid from "@material-ui/core/Grid"
import FormInputFieldBlock from "../FormInputFieldBlock/FormInputFieldBlock"

import { StyleProps } from "./EmailInput.styles"
import { useStyles } from "./EmailInput.styles"

type PropsClasses = Record<keyof StyleProps, string>

type properties = {
  errors: any
  touched: any
}

const EmailInput: React.FC<properties> = (props) => {
  const classes: PropsClasses = useStyles({} as StyleProps)

  return (
    <Grid item container direction="column">
      <Grid item>
        <label className={classes.formInputTitle} htmlFor={"email"}>
          <span style={{ color: "red", fontSize: "2em" }}>*</span>
          پست الکترونیک
        </label>
      </Grid>
      <Grid item>
        <FormInputFieldBlock
          fieldType={"textInput"}
          name={"email"}
          errors={props.errors}
          touched={props.touched}
          placeholder={"Email Address"}
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

export default EmailInput
