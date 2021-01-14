import React from "react"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"

import { StyleProps } from "./Button.styles"
import { useStyles } from "./Button.styles"

export enum ClassName {
  registerForm = "registerButton",
  loginForm = "loginButton",
  loginForgottenPassworn = "loginForgottenPassworn",
}

type properties = {
  for: string
  onClick?: any
  disabled?: boolean
  type?: any
  value: string
}

type PropsClasses = Record<keyof StyleProps, string>

const CustomButton: React.FC<properties> = (props) => {
  const classes: PropsClasses = useStyles({} as StyleProps)

  return (
    <Box boxShadow={5} clone>
      <Button
        className={classes[props.for]}
        onClick={props.onClick}
        disabled={props.disabled}
        variant="contained"
        type={props.type}
      >
        {props.value}
      </Button>
    </Box>
  )
}

export default CustomButton
