import React, { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router"

import { PrevArrowButton, NextArrowButton } from "./ArrowButton"
import { PagesButton } from "./PageButton"
import { PhoneMode } from "./PhoneMode"
import { PaginationMaker } from "./PaginationMaker"
import { resolvedData } from "../fake-data"

import style from "./SearchPagination.module.css"

const SearchPagination = () => {
  const pathName: string = useLocation().pathname
  const history: any = useHistory()
  const [currentPage, setCurrentPage] = useState<number>(1)

  //fake data
  const totalCount: number = resolvedData.result.count
  const pageSize: number = 8
  let lastPage: number = Math.ceil(totalCount / pageSize)
  const totalPages: number[] = PaginationMaker(
    currentPage,
    totalCount,
    pageSize
  )

  useEffect(() => {
    const params: any = new URLSearchParams(window.location.search)
    params.set("page", currentPage)
    history.replace(`${pathName}?${params.toString()}`)
  }, [currentPage])

  return (
    <div className={style.paginationContainer}>
      <ul className={style.paginationCounters}>
        <PrevArrowButton
          currentPage={currentPage}
          lastPage={lastPage}
          setCurrentPage={setCurrentPage}
        />
        <PagesButton
          totalPages={totalPages}
          currentPage={currentPage}
          lastPage={lastPage}
          setCurrentPage={setCurrentPage}
        />
        <PhoneMode currentPage={currentPage} lastPage={lastPage} />
        <NextArrowButton
          currentPage={currentPage}
          lastPage={lastPage}
          setCurrentPage={setCurrentPage}
        />
      </ul>
    </div>
  )
}

export { SearchPagination }
