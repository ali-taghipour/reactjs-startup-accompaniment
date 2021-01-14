import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import FormInputFieldBlock from "../FormInputFieldBlock/FormInputFieldBlock"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import questionMark from "../../../../assets/images/registeration/question-mark-icon.png"
import DialogContainer from "../Dialog"
import IsLoading from "../../IsLoading"

import CountiesInput from "./CoutiesInput"
import CitiesInput from "./CitiesInput"

import { useAllCountries } from "../../../../core/api/get-all-country.api"

import { StyleProps } from "./LocationInputs.styles"
import { useStyles } from "./LocationInputs.styles"

type PropsClasses = Record<keyof StyleProps, string>
type ErrorsType = {
  locationId: any
  locationId2: any
  locationId3: any
  locationTitle: any
}
type TouchedType = {
  locationId: any
  locationId2: any
  locationId3: any
  locationTitle: any
}

type properties = {
  errors: ErrorsType
  touched: TouchedType
  setValue: any
  values: any
}

const LocationInputs: React.FC<properties> = (props) => {
  const classes: PropsClasses = useStyles({} as StyleProps)
  const theme = useTheme()
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"))

  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const lacationHelp = {
    faTitle: "موقعیت مکانی",
    faBody:
      "از مهم‌ترین کارکردهای وبسایت همنوازی امکان جستجوی هنرمندان/هنرجویان بر اساس موقعیت جغرافیایی آنهاست. تعیین حدودی محل زندگی/کار شما امکان می‌دهد محققین/گردشگران/ هنرمندان همسایه هرچه سریع‌تر به شما دسترسی یابند.",
    enTitle: "Location",
    enBody:
      "One of the most important functions of Hamnavazi website is the ability to search for artists/art enthusiasts based on their geographical location. Defining your working/living approximate location allows researchers/tourists/your neighbor artists to find you as quickly as possible.",
  }

  const { isLoading, data, isError } = useAllCountries()

  if (isLoading) {
    return <IsLoading />
  }

  if (isError) {
    console.log("error")
  }

  return (
    <Grid item container direction="column">
      <Grid item container direction="row" spacing={1}>
        <Grid item>
          <label className={classes.formInputTitle} htmlFor={"firstName"}>
            موقعیت مکانی
          </label>
        </Grid>

        <Grid
          item
          className={classes.questionMark}
          onClick={() => setOpenDialog(!openDialog)}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src={questionMark}
            alt="question mark"
          />
        </Grid>
      </Grid>

      <Grid item>
        <DialogContainer
          open={openDialog}
          setOpen={setOpenDialog}
          content={lacationHelp}
        />
      </Grid>

      <Grid item container direction={matchesXs ? "column" : "row"} spacing={2}>
        <Grid item sm>
          <FormInputFieldBlock
            fieldType={"selectInput"}
            name={"locationId"}
            errors={props.errors.locationId}
            touched={props.touched.locationId}
            placeholder={"کشور | Country"}
            hasSearch={true}
            optionList={data ? [data] : [[]]}
            setValue={props.setValue}
          />
        </Grid>

        <CountiesInput
          errors={props.errors.locationId2}
          touched={props.touched.locationId2}
          id={props.values.locationId}
          setValue={props.setValue}
        />
        <CitiesInput
          errors={props.errors.locationId3}
          touched={props.touched.locationId3}
          id={props.values.locationId2}
          setValue={props.setValue}
        />
      </Grid>
      <Grid item style={{ marginTop: "1em" }}>
        <FormInputFieldBlock
          fieldType={"textInput"}
          name={"locationTitle"}
          errors={props.errors.locationTitle}
          touched={props.touched.locationTitle}
          placeholder={"منطقه  |  Region"}
          height={"type1"}
        />
      </Grid>
      <Grid item>
        <div className={classes.formInputSeperator} />
      </Grid>
    </Grid>
  )
}

export default LocationInputs
