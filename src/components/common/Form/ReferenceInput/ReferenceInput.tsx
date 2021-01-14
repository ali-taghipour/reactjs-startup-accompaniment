import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import FormInputFieldBlock from "../FormInputFieldBlock/FormInputFieldBlock"

import { StyleProps } from "./ReferenceInput.styles"
import { useStyles } from "./ReferenceInput.styles"

import questionMark from "../../../../assets/images/registeration/question-mark-icon.png"
import DialogContainer from "../Dialog/Dialog"

type PropsClasses = Record<keyof StyleProps, string>

type properties = {
  errors: any
  touched: any
}

const ReferenceInput: React.FC<properties> = (props) => {
  const classes: PropsClasses = useStyles({} as StyleProps)

  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const howContactUsHelp = {
    faTitle: "نحوه‌ی آشنایی با ما",
    faBody:
      "با مشخص کردن نحوه‌ی آشنایی خود می‌توانید از امتیازات تعیین شده برای هر بخش بهره‌مند شوید.",
    enTitle: "How did you know us",
    enBody:
      "By mentioning how you found out about us, you can take advantage of the facilities of each section.",
  }

  return (
    <Grid item container direction="column">
      <Grid item container direction="row" alignItems="center" spacing={1}>
        <Grid item>
          <span className={classes.formInputTitle}>نحوه آشنایی با ما</span>
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
          content={howContactUsHelp}
        />
      </Grid>
      <Grid item style={{ marginTop: "5px" }}>
        <FormInputFieldBlock
          fieldType={"textInput"}
          name={"reference"}
          errors={props.errors}
          touched={props.touched}
          placeholder={"Reference Code"}
          height={"type1"}
        />
      </Grid>
      <Grid item>
        <div className={classes.formInputSeperator} />
      </Grid>
    </Grid>
  )
}

export default ReferenceInput
