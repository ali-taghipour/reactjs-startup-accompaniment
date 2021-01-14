import React, { useState, useEffect } from "react"
import { Field, ErrorMessage } from "formik"

import selectIconArrowDown from "../../../../assets/images/registeration/chevron-down.png"
import selectIconArrowUp from "../../../../assets/images/registeration/chevron-up.png"

import Styles from "./SelectInput.module.css"
/* sample input:  {selectList: genderList, style:{width:"",height: "",search-background-color:""}}*/
/* sample input list:  const genderList = [[{id:1,title: "مرد | male"}],[{id:2,title: "زن | woman"}]]; */

type properties = {
  title: string
  name: string
  errors: any
  touched: any
  optionList: any
  useFor?: string
  hasSearch?: boolean
  setValue: any
}

type Value = {
  key: any
  title: any
}

const SelectInput: React.FC<properties> = (props) => {
  const [open, setOpen] = useState<boolean>(false)
  const [scroll, setScroll] = useState<boolean>(false)
  const [search, setSearch] = useState<string>("")
  const optionList = props.optionList[0]
  const [filteredList, setFilteredList] = useState<any>([])
  const [value, setValue] = useState<Value>({
    key: 0,
    title: props.title,
  })

  const handleSaerch = async (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    const specifiedElement: any = document.getElementById(
      `select-all-block_${props.name}`
    )
    document.addEventListener("click", (event) => {
      const isClickInside: boolean = specifiedElement.contains(event.target)
      if (!isClickInside) {
        setOpen(false)
      }
    })
    return document.removeEventListener("click", (event) => {
      const isClickInside = specifiedElement.contains(event.target)
      if (!isClickInside) {
        setOpen(false)
      }
    })
  }, [props.name])

  /* set value to formik field */

  const setFieldValue = props.setValue
  useEffect(() => {
    setFieldValue(props.name, parseInt(value.key), true)
  }, [value.key, props.name, setFieldValue])

  useEffect(() => {
    let number: number = 0
    let updateFilteredList = new Set()
    optionList.forEach((option) => {
      if (typeof option[0] === typeof "") {
        if ((option[0] as any).includes(search)) {
          number = number + 1
          if (number > 6) {
            setScroll(true)
          }
          updateFilteredList.add([
            { key: option[0], title: option[0], role: "title" },
          ])
        }
        ;(option[1] as any).forEach((optionItem) => {
          if (
            optionItem.title.includes(search) &&
            optionItem.title !== value.title
          ) {
            number = number + 1
            if (number > 6) {
              setScroll(true)
            }
            updateFilteredList.add([
              {
                key: optionItem.id,
                title: optionItem.title,
                role: "option",
              },
            ])
          }
        })
      } else {
        ;(option as any).forEach((optionItem) => {
          if (
            optionItem.title.includes(search) &&
            optionItem.title !== value.title
          ) {
            number = number + 1
            if (number > 6) {
              setScroll(true)
            }
            updateFilteredList.add([
              {
                key: optionItem.id,
                title: optionItem.title,
                role: "option",
              },
            ])
          }
        })
      }
    })
    setFilteredList(Array.from(updateFilteredList))
  }, [search, optionList, value.title])

  return (
    <div
      id={`select-all-block_${props.name}`}
      style={{ width: "100%", position: "relative" }}
    >
      <div
        style={{
          background: props.useFor === "accordion" ? "#ffffff" : undefined,
        }}
        className={
          props.errors && props.touched
            ? `${Styles.selectInputError}`
            : `${Styles.selectInput}`
        }
        onClick={() => {
          setOpen(!open)
        }}
      >
        <Field
          className={`${Styles.fieldInput}`}
          type="button"
          name={props.name}
          value={
            value.title.length > 14
              ? value.title.substring(0, 10) + "..."
              : value.title
          }
        />
        <span
          className={`${Styles.selectInputIconHolder}`}
          style={{
            background: props.useFor === "accordion" ? "#d8d8d8" : undefined,
          }}
        >
          <img
            style={{ height: "80%", width: "80%" }}
            src={open ? selectIconArrowUp : selectIconArrowDown}
            alt="down"
          />
        </span>
      </div>
      <ErrorMessage
        name={props.name}
        component="div"
        className={`${Styles.formErrorBlock}`}
      />
      {open ? (
        <ul
          id="selectOption"
          style={{
            background: props.useFor === "accordion" ? "#ffffff" : undefined,
          }}
          className={
            scroll
              ? `${Styles.selectDropDownList} ${Styles.selectDropDownListScroll}`
              : `${Styles.selectDropDownList} ${Styles.selectDropDownListFix}`
          }
        >
          {props.hasSearch ? (
            <li
              className={`${Styles.selectDropDownListItem} ${Styles.selectInputBlock}`}
            >
              <input
                style={{
                  background:
                    props.useFor === "accordion" ? "#bfbfbf" : undefined,
                }}
                type="text"
                name={value.title}
                placeholder="جستجو ..."
                value={search}
                onChange={(event) => handleSaerch(event)}
              />
            </li>
          ) : undefined}
          {value.key !== 0 ? (
            <li
              className={`${Styles.selectDropDownListItem} ${Styles.selectInputOption}`}
              onClick={() => {
                setValue({ key: 0, title: props.title })
              }}
            >
              هیچکدام | None
            </li>
          ) : undefined}
          {filteredList.toString() !== "" ? (
            filteredList.map((item, index) => {
              if (item[0].role === "title") {
                return (
                  <li
                    key={index}
                    className={`${Styles.selectDropDownListItemTitle}`}
                  >
                    {item[0].title}
                  </li>
                )
              } else {
                return (
                  <li
                    key={index}
                    data-value={item[0].title}
                    data-key={item[0].key}
                    onClick={(event: React.MouseEvent<HTMLElement>) => {
                      const el = event.target as HTMLInputElement
                      setValue({
                        key: el.getAttribute("data-key"),
                        title: el.getAttribute("data-value"),
                      })
                      setOpen(false)
                    }}
                    className={`${Styles.selectDropDownListItem} ${Styles.selectInputOption}`}
                  >
                    {item[0].title}
                  </li>
                )
              }
            })
          ) : (
            <li
              className={`${Styles.selectDropDownListItem} ${Styles.selectInputOption}`}
            >
              No Result
            </li>
          )}
        </ul>
      ) : undefined}
    </div>
  )
}

export default SelectInput
