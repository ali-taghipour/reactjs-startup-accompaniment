import React from "react"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import FormTitle from "../../common/Form/FormTitle"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import FastSubscriptionFormFields from "./FastSubscriptionFormFields"

import { initialValues } from "../../../core/initialvalues/register-fast-subscription.initialvalues"
import { validation } from "../../../core/validations/register-fast-subscription.validation"

import CustomButton, { ClassName } from "../../common/Form/Button"

import Loading from "../../../components/common/IsLoading"

import { usePostRegister } from "../../../core/api/post-register"

import { StyleProps } from "./FastSubscriptionBlock.styles"
import { useStyles } from "./FastSubscriptionBlock.styles"

type PropsClasses = Record<keyof StyleProps, string>

const FastSubscriptionBlock: React.FC = () => {
  const classes: PropsClasses = useStyles({} as StyleProps)
  const theme = useTheme()
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"))

  const [mutate, { error, isError, isLoading }] = usePostRegister()

  if (isError) {
    console.log(error)
  }

  return (
    <React.Fragment>
      {isLoading && <Loading />}
      <Box clone boxShadow={3}>
        <Grid className={classes.fastSubsBlockContainer}>
          <Grid
            item
            container
            direction="row"
            className={classes.fastSubsFormContainer}
            style={{ width: matchesXs ? "95%" : "600px" }}
          >
            <Grid item container direction="column">
              <FormTitle title="هویت | ID" />
            </Grid>

            <Formik
              initialValues={initialValues}
              validationSchema={Yup.object().shape(validation)}
              onSubmit={(values, { setSubmitting }) => {
                mutate(values)
                  .then(() => {
                    console.log("loged in")
                  })
                  .catch(() => {
                    console.log(error)
                  })
                setTimeout(() => {
                  setSubmitting(false)
                }, 400)
              }}
            >
              {({ errors, touched, isSubmitting, setFieldValue, values }) => {
                return (
                  <Form style={{ width: "100%" }}>
                    <FastSubscriptionFormFields
                      errors={errors}
                      touched={touched}
                      setFieldValue={setFieldValue}
                      values={values}
                    />
                    <Grid
                      item
                      container
                      justify="center"
                      style={{
                        textAlign: "center",
                        marginTop: "5em",
                        marginBottom: "3em",
                      }}
                    >
                      <CustomButton
                        for={ClassName.registerForm}
                        disabled={isSubmitting}
                        type={"submit"}
                        value={"عضویت سریع | Fast Subscription"}
                      />
                    </Grid>
                  </Form>
                )
              }}
            </Formik>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  )
}

export default FastSubscriptionBlock
