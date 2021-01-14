import React from "react"
import Grid from "@material-ui/core/Grid"
import FormInputFieldBlock from "../FormInputFieldBlock/FormInputFieldBlock"

import IsLoading from "../../IsLoading"

import { useAllCounties } from "../../../../core/api/get-county-by-country-id.api"

type properties = {
  id: number
  errors: any
  touched: any
  setValue: any
}

const CountiesInput: React.FC<properties> = (props) => {
  const { isLoading, data, isError } = useAllCounties(props.id)

  if (isLoading) {
    return <IsLoading />
  }

  if (isError) {
    console.log("error")
  }

  return (
    <Grid item sm>
      <FormInputFieldBlock
        fieldType={"selectInput"}
        name={"locationId2"}
        errors={props.errors}
        touched={props.touched}
        placeholder={"استان | County"}
        hasSearch={true}
        optionList={data ? [data] : [[]]}
        setValue={props.setValue}
      />
    </Grid>
  )
}

export default CountiesInput
