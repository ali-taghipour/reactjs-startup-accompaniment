import React from "react"
import Grid from "@material-ui/core/Grid"
import FormInputFieldBlock from "../FormInputFieldBlock/FormInputFieldBlock"

import { StyleProps } from "./PasswordInput.styles"
import { useStyles } from "./PasswordInput.styles"

type PropsClasses = Record<keyof StyleProps, string>

type properties = {
  errors: any
  touched: any
  notStar?: boolean
}

const PasswordInput: React.FC<properties> = (props) => {
  const classes: PropsClasses = useStyles({} as StyleProps)

  return (
    <Grid item container direction="column">
      <Grid item>
        <label className={classes.formInputTitle} htmlFor={"password"}>
          {props.notStar ? undefined : (
            <span style={{ color: "red", fontSize: "2em" }}>*</span>
          )}
          گذرواژه
        </label>
      </Grid>
      <Grid item>
        <FormInputFieldBlock
          fieldType={"textInput"}
          name={"password"}
          errors={props.errors}
          touched={props.touched}
          placeholder={"Password"}
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

export default PasswordInput
