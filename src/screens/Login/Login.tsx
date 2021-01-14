import React, { useContext } from "react"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import FormTitle from "../../components/common/Form/FormTitle"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import UserNameInput from "../../components/common/Form/UserNameInput"
import PasswordInput from "../../components/common/Form/PasswordInput"

import { initialValues } from "../../core/initialvalues/login.initialvalues"
import { validation } from "../../core/validations/login.validation"

import CustomButton, { ClassName } from "../../components/common/Form/Button"

import Loading from "../../components/common/IsLoading"

import { usePostLogin } from "../../core/api/post-login"
import { TokenContext } from "../../components/AuthContext"

import { StyleProps } from "./Login.styles"
import { useStyles } from "./Login.styles"

type PropsClasses = Record<keyof StyleProps, string>

const Login: React.FC = () => {
  const classes: PropsClasses = useStyles({} as StyleProps)
  const theme = useTheme()
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"))

  const [mutate, { data, error, isError, isLoading }] = usePostLogin()
  const { dispatch } = useContext(TokenContext)

  if (isError) {
    console.log(error)
  }

  return (
    <React.Fragment>
      {isLoading && <Loading />}
      <Box clone boxShadow={3}>
        <Grid className={classes.loginContainer}>
          <Grid
            item
            container
            direction="row"
            className={classes.loginFormContainer}
            style={{ width: matchesXs ? "95%" : "600px" }}
          >
            <Grid item container direction="column">
              <FormTitle title="ورود  |  LOGIN" />
            </Grid>

            <Formik
              initialValues={initialValues}
              validationSchema={Yup.object().shape(validation)}
              onSubmit={(values, { setSubmitting }) => {
                mutate(values)
                  .then(() => {
                    dispatch({
                      type: "login",
                      payload: {
                        accessToken: data.accessToken,
                        refereshToken: data.refereshToken,
                      },
                    })
                  })
                  .catch(() => {
                    console.log(error)
                  })
                setTimeout(() => {
                  setSubmitting(false)
                }, 400)
              }}
            >
              {({ errors, touched, isSubmitting }) => {
                return (
                  <Form style={{ width: "100%" }}>
                    <UserNameInput
                      errors={errors.username}
                      touched={touched.username}
                      notStar={true}
                    />
                    <PasswordInput
                      errors={errors.password}
                      touched={touched.password}
                      notStar={true}
                    />
                    <Grid
                      item
                      container
                      direction="row"
                      justify="center"
                      spacing={1}
                      style={{
                        textAlign: "center",
                        marginTop: "5em",
                        marginBottom: "3em",
                      }}
                    >
                      <Grid item sm={4}>
                        <CustomButton
                          for={ClassName.loginForm}
                          disabled={isSubmitting}
                          type={"submit"}
                          value={"ورود  |  Login"}
                        />
                      </Grid>
                      <Grid item sm={8}>
                        <CustomButton
                          for={ClassName.loginForgottenPassworn}
                          type={"button"}
                          value={"فراموشی گذرواژه  |  Forgotten Password"}
                        />
                      </Grid>
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

export { Login }
