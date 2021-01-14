import React, { useState, useEffect } from "react"

import { SelectOptionDropDown } from "./SelectOptionDropdown.component"

import "./select-option-styles.css"

type ISelectOption = {
  listData?: any
  name: string
  searchStyle?: string
  handleChange: (e: any) => void
  significant?: boolean
  label?: string
  placeholder?: string
  error?: string
}

interface ISelectVAl {
  name: string
  id: number
  title: string
}

const SelectOption: React.FC<ISelectOption> = ({
  listData,
  name,
  searchStyle,
  handleChange,
  significant,
  label,
  placeholder,
  error,
}) => {
  const [toggle, setToggle] = useState<boolean>(false)
  const [selectValue, setSelectValue] = useState<ISelectVAl>()
  const [searchValue, setSearchValue] = useState<string>("")
  const [primaryData, setPrimaryData] = useState<[]>([])

  useEffect(() => {
    setPrimaryData(listData)
  }, [])

  useEffect(() => {
    const newList = searchValue
      ? listData.filter((item) =>
          item.title
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase())
        )
      : listData
    setPrimaryData(newList)
  }, [searchValue, listData, selectValue])

  return (
    <div
      className={`select-option-input-container
            ${
              searchStyle === "searchSelectOption"
                ? "searchSelectOption"
                : ""
            }
            ${
              searchStyle === "filterSelectOption"
                ? "filterSelectOption"
                : ""
            }
        `}
    >
      {significant && (
        <span className="input-significant">*</span>
      )}
      {label && <div className="input-label">{label}</div>}
      <div
        // name ="select-option-inputs"
        className={
          error
            ? "input-text input-text-error"
            : "input-text input-text-size1"
        }
        onClick={(e) => setToggle(!toggle)}
      >
        <span className="input-text-value">
          {selectValue
            ? selectValue.title.length < 12
              ? selectValue.title
              : `${selectValue.title.substr(0, 10)}...`
            : placeholder}
        </span>

        <span
          className={
            toggle
              ? "input-arrow-shape-up"
              : "input-arrow-shape-down"
          }
          onClick={() => setToggle(!toggle)}
        />
      </div>

      <SelectOptionDropDown
        toggle={toggle}
        setSearchValue={setSearchValue}
        setToggle={setToggle}
        setSelectValue={setSelectValue}
        handleChange={handleChange}
        dataList={primaryData}
        name={name}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  )
}

export { SelectOption }
