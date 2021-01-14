import React from "react"
import Grid from "@material-ui/core/Grid"
import FormInputFieldBlock from "../FormInputFieldBlock/FormInputFieldBlock"

import { creatingGenderList } from "../../../../core/utils/gender-list.utils"

import { StyleProps } from "./GenderInput.styles"
import { useStyles } from "./GenderInput.styles"

type PropsClasses = Record<keyof StyleProps, string>

type properties = {
  errors: any
  touched: any
  setValue: any
}

const GenderInput: React.FC<properties> = (props) => {
  const classes: PropsClasses = useStyles({} as StyleProps)

  return (
    <Grid item container direction="column">
      <Grid item>
        <label className={classes.formInputTitle} htmlFor={"firstName"}>
          جنسیت
        </label>
      </Grid>
      <Grid item>
        <FormInputFieldBlock
          fieldType={"selectInput"}
          name={"gender"}
          errors={props.errors}
          touched={props.touched}
          placeholder={"Gender"}
          hasSearch={false}
          optionList={[creatingGenderList]}
          setValue={props.setValue}
        />
      </Grid>
      <Grid item>
        <div className={classes.formInputSeperator} />
      </Grid>
    </Grid>
  )
}

export default GenderInput
