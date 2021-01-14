import React, { useState, Fragment } from "react"

import style from "./Checkbox.module.css"

type CheckBoxType = {
  label: string
  name: string
  handleChange: (e: any) => void
}

const CheckBox: React.FC<CheckBoxType> = ({ label, name, handleChange }) => {
  const [select, setSelect] = useState(false)

  return (
    <Fragment>
      {label && (
        <div
          className={`${style.checkboxInputContainer} ${style.filterCheckBox}`}
        >
          <input
            className={style.checkboxInput}
            id={label}
            name={name}
            onChange={handleChange}
            type="checkbox"
            value={label}
          />
          <label
            htmlFor={`${label}`}
            className={style.inputLabel}
            onClick={() => setSelect(!select)}
          >
            {label}
            <div
              className={
                select
                  ? `${style.checkboxTick} ${style.select}`
                  : `${style.checkboxTick}`
              }
            />
          </label>
        </div>
      )}
    </Fragment>
  )
}

export { CheckBox }
