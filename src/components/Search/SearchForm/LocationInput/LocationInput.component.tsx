import React, { Fragment } from "react"
import { useHistory, useLocation } from "react-router"

import {
  useCountries,
  useCounties,
  useCities,
} from "../../../../core/api/location.api"
import { SelectOption } from "../../../common/Form/SelectOption"

import IsLoading from "../../../common/IsLoading"

const LocationInput: React.FC = () => {
  const pathName: string = useLocation().pathname
  const history: any = useHistory()

  const handleChange: (e: any) => void = (e) => {
    const id: number = e.target.id

    const params: any = new URLSearchParams(window.location.search)
    params.set("locationId", id)
    history.replace(`${pathName}?${params.toString()}`)
  }

  // const { data: AllCountries, isLoading } = useCountries()
  //fake
  const isLoading = false
  const AllCountries = [
    {
      id: 1,
      title: "iran",
    },
  ]

  return (
    <Fragment>
      {isLoading && <IsLoading />}
      <SelectOption
        listData={isLoading ? [] : AllCountries}
        handleChange={handleChange}
        name="locationId"
        placeholder="کشور | Country"
        searchStyle="searchSelectOption"
      />
    </Fragment>
  )
}

export { LocationInput }
