import React, { Fragment } from "react"
import { useHistory, useLocation } from "react-router"

import { useStyles } from "../../../../core/api/styles.api"
import { SelectOption } from "../../../common/Form/SelectOption"

import IsLoading from "../../../common/IsLoading/IsLoading"

const StylesInput: React.FC = () => {
  const pathName: string = useLocation().pathname
  const history: any = useHistory()

  const handleChange: (e: any) => void = (e) => {
    const id: number = e.target.id

    const params: any = new URLSearchParams(window.location.search)
    params.set("styleId", id)
    history.replace(`${pathName}?${params.toString()}`)
  }

  // const { data: AllStyles, isLoading } = useStyles()
  //fake
  const isLoading = false
  const AllStyles = [
    {
      id: 1,
      title: "sonati",
    },
  ]

  return (
    <Fragment>
      {isLoading && <IsLoading />}
      <SelectOption
        listData={isLoading ? [] : AllStyles}
        handleChange={handleChange}
        name="styleId"
        placeholder="سبک | Style"
        searchStyle="searchSelectOption"
      />
    </Fragment>
  )
}

export { StylesInput }
