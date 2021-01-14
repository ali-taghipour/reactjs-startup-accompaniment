import React from "react"
import Styles from "./FormTitle.module.css"

type properties = {
  title: string
}

const FormTitle: React.FC<properties> = (props) => {
  return (
    <div className={`${Styles.formTitle}`}>
      <span>{props.title}</span>
      <div className={`${Styles.formFieldSeperator}`} />
    </div>
  )
}

export default FormTitle
