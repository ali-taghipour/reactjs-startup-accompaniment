import React, { Fragment } from "react"
import { useLocation, useHistory } from "react-router"

import { SortTypeList } from "../../../../core/utils/sort-type-list.utils"
import { SortOnList } from "../../../../core/utils/sorton-list-.utils"
import { SelectOption } from "../../../common/Form/SelectOption"

const SortFilter: React.FC = () => {
  const pathName: string = useLocation().pathname
  const history: any = useHistory()

  const handleChange: (e: any) => void = (e) => {
    const id: number = e.target.id
    const name: string = e.target.name

    const params: any = new URLSearchParams(window.location.search)
    params.set(name, id)
    history.replace(`${pathName}?${params.toString()}`)
  }

  return (
    <Fragment>
      <SelectOption
        handleChange={handleChange}
        listData={SortOnList}
        name="sortOn"
        label="به ترتیب"
        placeholder="Sort On"
        searchStyle="filterSelectOption"
      />
      <SelectOption
        handleChange={handleChange}
        listData={SortTypeList}
        name="sortType"
        label="صعودی/نزولی"
        placeholder="Sort Type"
        searchStyle="filterSelectOption"
      />
    </Fragment>
  )
}

export { SortFilter }
