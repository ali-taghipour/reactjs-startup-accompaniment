import React, { Fragment, useState, useEffect } from "react"
import { useHistory, useLocation } from "react-router"

import { useInstrument } from "../../../../core/api/instrument.api"
import { SelectOption } from "../../../common/Form/SelectOption"

import IsLoading from "../../../common/IsLoading"

const InstrumentInput: React.FC = () => {
  const pathName: string = useLocation().pathname
  const history: any = useHistory()

  const handleChange: (e: any) => void = (e) => {
    const id: number = e.target.id

    const params: any = new URLSearchParams(window.location.search)
    params.set("instrumentId", id)
    history.replace(`${pathName}?${params.toString()}`)
  }

  // const { data: AllInstrument, isLoading } = useInstrument()
  //fake data
  const isLoading = false
  const AllInstrument = [
    {
      id: 1,
      title: "setar",
    },
  ]

  return (
    <Fragment>
      {isLoading && <IsLoading />}
      <SelectOption
        listData={isLoading ? [] : AllInstrument}
        handleChange={handleChange}
        name="instrumentId"
        placeholder="ساز | Instrument"
        searchStyle="searchSelectOption"
      />
    </Fragment>
  )
}

export { InstrumentInput }
