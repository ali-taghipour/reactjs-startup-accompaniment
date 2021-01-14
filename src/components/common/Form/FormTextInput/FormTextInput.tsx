import React, { useState, useEffect } from "react"
import { Field, ErrorMessage } from "formik"

import Styles from "./FormTextInput.module.css"

type properties = {
  errors: any
  touched: any
  placeholder: string
  height?: string
  name: string
  ltrDir?: boolean
  inputTextType?: string
}

const FromTextInput: React.FC<properties> = (props) => {
  const [height, setHeight] = useState<string>("35px")
  useEffect(() => {
    switch (props.height) {
      case "type1":
        setHeight("40px")
        break
      case "type2":
        setHeight("90px")
        break
      case "type3":
        setHeight("160px")
        break
      default:
        break
    }
  }, [props.height])

  return (
    <>
      {props.height === "type1" ? (
        <div
          style={{ height: height }}
          className={
            props.errors && props.touched
              ? `${Styles.formInputBlockError}`
              : `${Styles.formInputBlock}`
          }
        >
          <Field
            name={props.name}
            type={
              props.inputTextType && props.inputTextType === "password"
                ? "password"
                : "text"
            }
            className={
              props.ltrDir
                ? `${Styles.formInputText} ${Styles.formInputTextLtrDir}`
                : `${Styles.formInputText}`
            }
            placeholder={props.placeholder}
          />
          <ErrorMessage
            name={props.name}
            component="div"
            className={`${Styles.formErrorBlock}`}
          />
        </div>
      ) : props.height === "type2" || props.height === "type3" ? (
        <div style={{ height: height }} className={`${Styles.formInputBlock}`}>
          <Field
            name={props.name}
            as={"textarea"}
            className={`${Styles.formInputTextArea}`}
            placeholder={props.placeholder}
          />
        </div>
      ) : undefined}
    </>
  )
}

export default FromTextInput
