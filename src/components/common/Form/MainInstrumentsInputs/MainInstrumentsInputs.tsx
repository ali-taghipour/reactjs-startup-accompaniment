import React from "react"
import Grid from "@material-ui/core/Grid"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import MainInstrumentInput from "./MainInstrumentInput"
import MainLevelInput from "./MainLevelInput"
import MainStylesInputs from "./MainStylesInputs"
import MainStatingDateInput from "./MainStatingDateInput"

import { StyleProps } from "./MainInstrumentsInputs.styles"
import { useStyles } from "./MainInstrumentsInputs.styles"

type PropsClasses = Record<keyof StyleProps, string>
type ErrorsType = {
  mainInstrument: any
  mainLevel: any
  mainStartingDate: any
  mainStyle1: any
  mainStyle2: any
  mainStyle3: any
}
type TouchedType = {
  mainInstrument: any
  mainLevel: any
  mainStartingDate: any
  mainStyle1: any
  mainStyle2: any
  mainStyle3: any
}

type properties = {
  errors: ErrorsType
  touched: TouchedType
  setValue: any
}

const MainInstrumentsInputs: React.FC<properties> = (props) => {
  const classes: PropsClasses = useStyles({} as StyleProps)
  const theme = useTheme()
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <React.Fragment>
      <Grid item container direction={matchesXs ? "column" : "row"} spacing={1}>
        <Grid item container direction="column" sm={8}>
          <Grid item className={classes.formInputTitle}>
            <span style={{ color: "red" }}>*</span>ساز اصلی
          </Grid>
          <MainInstrumentInput
            errors={props.errors.mainInstrument}
            touched={props.touched.mainInstrument}
            setValue={props.setValue}
          />
        </Grid>
        <Grid item container direction="column" sm={4}>
          <Grid item>
            <span className={classes.formInputTitle}>سطح</span>
          </Grid>
          <MainLevelInput
            errors={props.errors.mainLevel}
            touched={props.touched.mainLevel}
            setValue={props.setValue}
          />
        </Grid>
      </Grid>

      <Grid item container direction="column" style={{ marginTop: "1em" }}>
        <Grid item>
          <span className={classes.formInputTitle}>تاریخ شروع</span>
        </Grid>
        <MainStatingDateInput
          errors={props.errors.mainStartingDate}
          touched={props.touched.mainStartingDate}
          setValue={props.setValue}
        />
      </Grid>

      <Grid item container direction="column" style={{ marginTop: "1em" }}>
        <Grid item>
          <div>
            <span className={classes.formInputTitle}>سبک ‌ها</span>
          </div>
        </Grid>
        <MainStylesInputs
          errors={props.errors}
          touched={props.touched}
          setValue={props.setValue}
        />
        <Grid item>
          <div className={classes.formInputSeperator} />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default MainInstrumentsInputs
