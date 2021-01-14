import React from "react"
import Grid from "@material-ui/core/Grid"
import FormInputFieldBlock from "../FormInputFieldBlock/FormInputFieldBlock"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import { useCurrentYear } from "../../../../core/api/get-current-date.api"
import {
  creatingYearList,
  creatingMonthList,
  CreatingDayList,
} from "../../../../core/utils/compute-date.utils"

import IsLoading from "../../IsLoading"

import { StyleProps } from "./BirthdayInputs.styles"
import { useStyles } from "./BirthdayInputs.styles"

type PropsClasses = Record<keyof StyleProps, string>
type ErrorsType = {
  year: any
  month: any
  day: any
}
type TouchedType = {
  year: any
  month: any
  day: any
}

type properties = {
  errors: ErrorsType
  touched: TouchedType
  values: any
  setValue: any
}

const BirthdayInputs: React.FC<properties> = (props) => {
  const classes: PropsClasses = useStyles({} as StyleProps)
  const theme = useTheme()
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"))

  const { isLoading, data, isError } = useCurrentYear()

  if (isLoading) {
    return <IsLoading />
  }

  if (isError) {
    console.log("error")
  }

  return (
    <Grid item container direction="column">
      {console.log()}
      <Grid item>
        <label className={classes.formInputTitle} htmlFor={"firstName"}>
          تاریخ تولد
        </label>
      </Grid>

      <Grid item container direction={matchesXs ? "column" : "row"} spacing={2}>
        <Grid item sm>
          <FormInputFieldBlock
            fieldType={"selectInput"}
            name={"yearOfBirthDate"}
            errors={props.errors.year}
            touched={props.touched.year}
            placeholder={"سال | Year"}
            hasSearch={true}
            optionList={data ? [creatingYearList(data)] : [[]]}
            setValue={props.setValue}
          />
        </Grid>
        <Grid item sm>
          <FormInputFieldBlock
            fieldType={"selectInput"}
            name={"monthOfBirthDate"}
            errors={props.errors.month}
            touched={props.touched.month}
            placeholder={"ماه | Month"}
            hasSearch={false}
            optionList={[creatingMonthList]}
            setValue={props.setValue}
          />
        </Grid>
        <Grid item sm>
          <FormInputFieldBlock
            fieldType={"selectInput"}
            name={"dayOfBirthDate"}
            errors={props.errors.day}
            touched={props.touched.day}
            placeholder={"روز | Day"}
            hasSearch={false}
            optionList={[
              CreatingDayList(
                props.values.yearOfBirthDate,
                props.values.monthOfBirthDate
              ),
            ]}
            setValue={props.setValue}
          />
        </Grid>
      </Grid>
      <Grid item>
        <div className={classes.formInputSeperator} />
      </Grid>
    </Grid>
  )
}

export default BirthdayInputs
