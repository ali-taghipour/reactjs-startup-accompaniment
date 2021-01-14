import React, { Fragment } from "react"

import style from "./ArrowButton.module.css"

type IArrowButton = {
  lastPage: number
  currentPage: number
  setCurrentPage: (e: number) => void
}

export const PrevArrowButton: React.FC<IArrowButton> = ({
  lastPage,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <Fragment>
      {lastPage !== 0 && currentPage !== 1 && (
        <li
          className={`${style.paginationArrow} ${style.right}`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          {" "}
          قبلی{" "}
        </li>
      )}
    </Fragment>
  )
}

export const NextArrowButton: React.FC<IArrowButton> = ({
  lastPage,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <Fragment>
      {lastPage !== 0 && currentPage !== lastPage && (
        <li
          className={`${style.paginationArrow} ${style.left}`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          {" "}
          بعدی{" "}
        </li>
      )}
    </Fragment>
  )
}
