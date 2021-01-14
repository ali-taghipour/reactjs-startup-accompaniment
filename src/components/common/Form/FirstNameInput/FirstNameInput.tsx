import React from "react"
import Grid from "@material-ui/core/Grid"
import FormInputFieldBlock from "../FormInputFieldBlock"

import { StyleProps } from "./FirstNameInput.styles"
import { useStyles } from "./FirstNameInput.styles"

type PropsClasses = Record<keyof StyleProps, string>

type properties = {
  errors: any
  touched: any
}

const FirstNameInput: React.FC<properties> = (props) => {
  const classes: PropsClasses = useStyles({} as StyleProps)

  return (
    <Grid item container direction="column">
      <Grid item>
        <label className={classes.formInputTitle} htmlFor={"firstName"}>
          نام
        </label>
      </Grid>
      <Grid item>
        <FormInputFieldBlock
          fieldType={"textInput"}
          name={"firstName"}
          errors={props.errors}
          touched={props.touched}
          placeholder={"First Name"}
          height={"type1"}
        />
      </Grid>
      <Grid item>
        <div className={classes.formInputSeperator} />
      </Grid>
    </Grid>
  )
}

export default FirstNameInput
