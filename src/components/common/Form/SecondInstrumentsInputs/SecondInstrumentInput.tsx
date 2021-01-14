import React from "react"
import Grid from "@material-ui/core/Grid"
import FormInputFieldBlock from "../FormInputFieldBlock/FormInputFieldBlock"

import IsLoading from "../../IsLoading/IsLoading"

import { useAllInstruments } from "../../../../core/api/get-instruments.api"

type properties = {
  errors: any
  touched: any
  setValue: any
}

const SecondInstrumentInput: React.FC<properties> = (props) => {
  const { isLoading, data, isError } = useAllInstruments()

  if (isLoading) {
    return <IsLoading />
  }

  if (isError) {
    console.log("error")
  }

  return (
    <Grid item>
      <FormInputFieldBlock
        fieldType={"selectInput"}
        name={"SecondInstrument"}
        errors={props.errors}
        touched={props.touched}
        placeholder={"Instrument"}
        hasSearch={true}
        optionList={data ? [data] : [[]]}
        setValue={props.setValue}
      />
    </Grid>
  )
}

export default SecondInstrumentInput
