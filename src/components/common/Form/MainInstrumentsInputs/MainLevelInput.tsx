import React from "react"
import Grid from "@material-ui/core/Grid"
import FormInputFieldBlock from "../FormInputFieldBlock/FormInputFieldBlock"

import { creatingLevelList } from "../../../../core/utils/instrument-and-styles-list.utils"

type properties = {
  errors: any
  touched: any
  setValue: any
}

const MainLevelInput: React.FC<properties> = (props) => {
  return (
    <Grid item>
      <FormInputFieldBlock
        fieldType={"selectInput"}
        name={"mainLevel"}
        errors={props.errors}
        touched={props.touched}
        placeholder={"Level"}
        hasSearch={true}
        optionList={[creatingLevelList]}
        setValue={props.setValue}
      />
    </Grid>
  )
}

export default MainLevelInput
