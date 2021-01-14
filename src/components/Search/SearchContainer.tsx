import React, { useEffect, useReducer, useState } from "react"
import { useHistory, useLocation } from "react-router"
import queryString from "query-string"

import { SearchFilter } from "./SearchFilter"
import { SearchTable } from "./SearchTable"
import * as SearchModel from "../../core/initialvalues/search-initialvalues"

import style from "./SearchContainer.module.css"

const SearchContainer: React.FC = () => {
  const history: any = useHistory()
  const searchParams: string = useLocation().search
  const searchPathname: string = useLocation().pathname

  const [filterToggle, setFilterToggle] = useState<boolean>(false)
  const [searchState, setSearchState] = useReducer(
    (s, a) => ({ ...s, ...a }),
    SearchModel.SearchInittial
  )

  const FindQueries = (keys, params) => {
    keys.map((key: string) => {
      SearchModel.NumbericParams.includes(key) &&
        setSearchState({ [key]: Number(params[key]) })

      SearchModel.BooleanParams.includes(key) && setSearchState({ [key]: true })

      SearchModel.ArrayParams.includes(key) &&
        setSearchState({ [key]: JSON.parse(params[key]) })
    })
  }

  useEffect(() => {
    searchPathname !== `${searchPathname}` &&
      history.push(`${searchPathname}?page=${1}`)
  }, [])

  useEffect(() => {
    setSearchState(SearchModel.SearchInittial)
    const params = queryString.parseUrl(searchParams).query
    const keys: string[] = Object.keys(params)
    FindQueries(keys, params)
  }, [searchParams])

  return (
    <div className={style.searchContainer}>
      <SearchFilter
        filterToggle={filterToggle}
        setFilterToggle={setFilterToggle}
      />
      <SearchTable searchState={searchState} filterToggle={filterToggle} />
    </div>
  )
}

export { SearchContainer }

// import { useSearchResult } from "../../../core/api/search.api"
// import { ISearchInittial } from "../../../core/models/search.model"
// import Cookie from "js-cookie"
// import swal from "sweetalert"

// const { resolvedData, isLoading } = useSearchResult(
//   searchState
// )
