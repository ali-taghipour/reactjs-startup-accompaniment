import React, { Fragment } from "react"

import style from "./PageButton.module.css"

type IPageButton = {
  totalPages: number[]
  lastPage: number
  currentPage: number
  setCurrentPage: (e: number) => void
}

const PagesButton: React.FC<IPageButton> = ({
  totalPages,
  lastPage,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <Fragment>
      {/* number of pagination less than 5 pages */}
      {totalPages !== [] &&
        lastPage <= 6 &&
        totalPages.map((index, i) => (
          <li
            key={i}
            className={
              currentPage === index
                ? `${style.paginationCount} ${style.active}`
                : `${style.paginationCount}`
            }
            onClick={() => setCurrentPage(index)}
          >
            {index}
          </li>
        ))}
      {/* number of pagination more than 5 pages*/}
      {lastPage > 6 &&
        totalPages !== [] &&
        totalPages.map((index, i) =>
          index !== 0 ? (
            <li
              key={i}
              className={
                currentPage === index
                  ? `${style.paginationCount} ${style.active}`
                  : `${style.paginationCount}`
              }
              onClick={() => setCurrentPage(index)}
            >
              {index}
            </li>
          ) : (
            <li key={i} className={style.paginationDisabled}>
              ...
            </li>
          )
        )}
    </Fragment>
  )
}

export { PagesButton }
