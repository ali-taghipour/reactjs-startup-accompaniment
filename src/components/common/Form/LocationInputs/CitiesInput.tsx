import React from "react"
import Grid from "@material-ui/core/Grid"
import FormInputFieldBlock from "../FormInputFieldBlock/FormInputFieldBlock"

import IsLoading from "../../IsLoading"

import { useAllCities } from "../../../../core/api/get-all-city-by-county-id.api"

type properties = {
  id: number
  errors: any
  touched: any
  setValue: any
}

const CitiesInput: React.FC<properties> = (props) => {
  const { isLoading, data, isError } = useAllCities(props.id)

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
        name={"locationId3"}
        errors={props.errors}
        touched={props.touched}
        placeholder={"شهر | City"}
        hasSearch={true}
        optionList={data ? [data] : [[]]}
        setValue={props.setValue}
      />
    </Grid>
  )
}

export default CitiesInput
