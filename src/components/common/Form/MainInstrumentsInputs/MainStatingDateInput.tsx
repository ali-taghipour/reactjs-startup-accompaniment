import React from "react"
import Grid from "@material-ui/core/Grid"
import FormInputFieldBlock from "../FormInputFieldBlock/FormInputFieldBlock"

import IsLoading from "../../IsLoading"

import { useCurrentYear } from "../../../../core/api/get-current-date.api"
import { creatingYearList } from "../../../../core/utils/compute-date.utils"

type properties = {
  errors: any
  touched: any
  setValue: any
}

const MainStatingDateInput: React.FC<properties> = (props) => {
  const { isLoading, data, isError } = useCurrentYear()

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
        name={"mainStartingDate"}
        errors={props.errors}
        touched={props.touched}
        placeholder={"Starting Date"}
        hasSearch={true}
        optionList={data ? [creatingYearList(data)] : [[]]}
        setValue={props.setValue}
      />
    </Grid>
  )
}

export default MainStatingDateInput
