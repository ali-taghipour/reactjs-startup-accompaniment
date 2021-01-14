import React from "react"
import Grid from "@material-ui/core/Grid"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
import FormInputFieldBlock from "../FormInputFieldBlock/FormInputFieldBlock"

import IsLoading from "../../IsLoading/IsLoading"

import { useAllStyles } from "../../../../core/api/get-styles.api"

type properties = {
  errors: any
  touched: any
  setValue: any
}

const SecondStylesInputs: React.FC<properties> = (props) => {
  const theme = useTheme()
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"))

  const { isLoading, data, isError } = useAllStyles()

  if (isLoading) {
    return <IsLoading />
  }

  if (isError) {
    console.log("error")
  }

  return (
    <Grid item container direction={matchesXs ? "column" : "row"} spacing={2}>
      <Grid item sm>
        <FormInputFieldBlock
          fieldType={"selectInput"}
          name={"SecondStyle1"}
          errors={props.errors.SecondStyle1}
          touched={props.touched.SecondStyle1}
          placeholder={"Style 1"}
          hasSearch={true}
          optionList={data ? [data] : [[]]}
          setValue={props.setValue}
        />
      </Grid>
      <Grid item sm>
        <FormInputFieldBlock
          fieldType={"selectInput"}
          name={"SecondStyle2"}
          errors={props.errors.SecondStyle2}
          touched={props.touched.SecondStyle2}
          placeholder={"Style 2"}
          hasSearch={true}
          optionList={data ? [data] : [[]]}
          setValue={props.setValue}
        />
      </Grid>
      <Grid item sm>
        <FormInputFieldBlock
          fieldType={"selectInput"}
          name={"SecondStyle3"}
          errors={props.errors.SecondStyle3}
          touched={props.touched.SecondStyle3}
          placeholder={"Style 3"}
          hasSearch={true}
          optionList={data ? [data] : [[]]}
          setValue={props.setValue}
        />
      </Grid>
    </Grid>
  )
}

export default SecondStylesInputs
