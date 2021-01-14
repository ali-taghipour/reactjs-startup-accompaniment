import React from "react"
import Grid from "@material-ui/core/Grid"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import SecondInstrumentInput from "./SecondInstrumentInput"
import SecondLevelInput from "./SecondLevelInput"
import SecondStylesInputs from "./SecondStylesInputs"
import SecondStatingDateInput from "./SecondStatingDateInput"

import { StyleProps } from "./SecondInstrumentsInputs.styles"
import { useStyles } from "./SecondInstrumentsInputs.styles"

type PropsClasses = Record<keyof StyleProps, string>
type ErrorsType = {
  SecondInstrument: any
  SecondLevel: any
  SecondStartingDate: any
  SecondStyle1: any
  SecondStyle2: any
  SecondStyle3: any
}
type TouchedType = {
  SecondInstrument: any
  SecondLevel: any
  SecondStartingDate: any
  SecondStyle1: any
  SecondStyle2: any
  SecondStyle3: any
}

type properties = {
  errors: any
  touched: any
  setValue: any
}

const SecondInstrumentsInputs: React.FC<properties> = (props) => {
  const classes: PropsClasses = useStyles({} as StyleProps)
  const theme = useTheme()
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <React.Fragment>
      <Grid item container direction={matchesXs ? "column" : "row"} spacing={1}>
        <Grid item container direction="column" sm={8}>
          <Grid item className={classes.formInputTitle}>
            ساز دوم
          </Grid>
          <SecondInstrumentInput
            errors={props.errors.SecondInstrument}
            touched={props.touched.SecondInstrument}
            setValue={props.setValue}
          />
        </Grid>
        <Grid item container direction="column" sm={4}>
          <Grid item>
            <span className={classes.formInputTitle}>سطح</span>
          </Grid>
          <SecondLevelInput
            errors={props.errors.SecondLevel}
            touched={props.touched.SecondLevel}
            setValue={props.setValue}
          />
        </Grid>
      </Grid>

      <Grid item container direction="column" style={{ marginTop: "1em" }}>
        <Grid item>
          <span className={classes.formInputTitle}>تاریخ شروع</span>
        </Grid>
        <SecondStatingDateInput
          errors={props.errors.SecondStatingDateInput}
          touched={props.touched.SecondStatingDateInput}
          setValue={props.setValue}
        />
      </Grid>

      <Grid item container direction="column" style={{ marginTop: "1em" }}>
        <Grid item>
          <div>
            <span className={classes.formInputTitle}>سبک ‌ها</span>
          </div>
        </Grid>
        <SecondStylesInputs
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

export default SecondInstrumentsInputs
