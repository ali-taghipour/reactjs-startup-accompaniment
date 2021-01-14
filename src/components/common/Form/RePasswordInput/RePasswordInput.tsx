import React from "react"
import Grid from "@material-ui/core/Grid"
import FormInputFieldBlock from "../FormInputFieldBlock/FormInputFieldBlock"

import { StyleProps } from "./RePasswordInput.styles"
import { useStyles } from "./RePasswordInput.styles"

type PropsClasses = Record<keyof StyleProps, string>

type properties = {
  errors: any
  touched: any
}

const RePasswordInput: React.FC<properties> = (props) => {
  const classes: PropsClasses = useStyles({} as StyleProps)

  return (
    <Grid item container direction="column">
      <Grid item>
        <label className={classes.formInputTitle} htmlFor={"repassword"}>
          <span style={{ color: "red", fontSize: "2em" }}>*</span>
          تکرار گذرواژه
        </label>
      </Grid>
      <Grid item>
        <FormInputFieldBlock
          fieldType={"textInput"}
          name={"repassword"}
          errors={props.errors}
          touched={props.touched}
          placeholder={"Confirm Password"}
          height={"type1"}
          ltrDir={true}
          inputTextType={"password"}
        />
      </Grid>
      <Grid item>
        <div className={classes.formInputSeperator} />
      </Grid>
    </Grid>
  )
}

export default RePasswordInput
