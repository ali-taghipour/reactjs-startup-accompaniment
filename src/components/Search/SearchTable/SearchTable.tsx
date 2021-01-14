import React, { Fragment } from "react"

import { Table } from "./Tabel"
import { TableTitle } from "./TableTitle"
import { ResultTitle } from "./ResultTitle"
import { SearchPagination } from "../SearchPagination"
import { resolvedData } from "../fake-data"

import style from "./SearchTabe.module.css"

type SearchTableType = {
  filterToggle: boolean
  searchState: object
}

const SearchTable: React.FC<SearchTableType> = ({
  searchState,
  filterToggle,
}) => {
  const isLoading = false
  console.log(searchState)

  return (
    <Fragment>
      {!isLoading && (
        <div
          className={
            filterToggle
              ? `${style.searchTableContainer}  ${style.minWidth}`
              : `${style.searchTableContainer}`
          }
        >
          <ResultTitle />
          <div className={style.searchTableHolder}>
            <div className={style.searchTable}>
              <TableTitle count={resolvedData.result.count} />

              {resolvedData.result.searchResult.map((item: any) => (
                <Table key={item.id} item={item} />
              ))}
            </div>
          </div>
          <SearchPagination />
        </div>
      )}
    </Fragment>
  )
}

export { SearchTable }
