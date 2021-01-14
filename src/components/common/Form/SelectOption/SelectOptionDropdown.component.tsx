import React from "react"
import "./select-option-styles.css"

interface ISelectVAl {
  name: string
  id: number
  title: string
}

type ISelectDrop = {
  toggle: boolean
  name: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
  setSelectValue: React.Dispatch<
    React.SetStateAction<ISelectVAl | undefined>
  >
  handleChange: (e: any) => void
  dataList: any
}

const SelectOptionDropDown: React.FC<ISelectDrop> = ({
  toggle,
  name,
  dataList,
  setSearchValue,
  setToggle,
  handleChange,
  setSelectValue,
}) => {
  return (
    <ul
      className={
        toggle
          ? "data-list-input-container"
          : "data-list-input-container hide"
      }
    >
      <li key="search" onClick={() => setToggle(toggle)}>
        <input
          className="data-list-search"
          placeholder="جستجو"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </li>
      {dataList &&
        dataList.map((item, i) => (
          <li
            key={i}
            onClick={() => {
              setSelectValue(item)
              setToggle(!toggle)
              handleChange({ target: { ...item, name } })
            }}
          >
            {item.title}
          </li>
        ))}
    </ul>
  )
}

export { SelectOptionDropDown }
