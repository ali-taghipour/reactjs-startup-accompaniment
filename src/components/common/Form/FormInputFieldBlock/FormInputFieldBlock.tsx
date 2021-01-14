import React from "react"
import FromTextInput from "../FormTextInput"
import SelectInput from "../SelectInput"

type properties = {
  fieldType: string
  errors: any
  touched: any
  placeholder: string
  height?: string
  name: string
  ltrDir?: boolean
  hasSearch?: boolean
  selectInputList?: any
  useFor?: string
  optionList?: any
  setValue?: any
  inputTextType?: string
}

const FormInputFieldBlock: React.FC<properties> = (props) => {
  return (
    <div>
      {props.fieldType === "textInput" ? (
        <FromTextInput
          errors={props.errors}
          touched={props.touched}
          placeholder={props.placeholder}
          height={props.height}
          name={props.name}
          ltrDir={props.ltrDir}
          inputTextType={props.inputTextType}
        />
      ) : props.fieldType === "selectInput" ? (
        <SelectInput
          name={props.name}
          errors={props.errors}
          touched={props.touched}
          title={props.placeholder}
          hasSearch={props.hasSearch}
          optionList={props.optionList}
          useFor={props.useFor}
          setValue={props.setValue}
        />
      ) : (
        <div />
      )}
    </div>
  )
}

export default FormInputFieldBlock
