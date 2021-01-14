import React, { Fragment } from "react"

import style from "./TableTitle.module.css"

type ITableTitle = {
  count: number
}

const TableTitle: React.FC<ITableTitle> = ({ count }) => {
  return (
    <Fragment>
      {count !== 0 ? (
        <div className={style.searchTableTitles}>
          <span className={style.imageContainer}></span>
          <span className={style.fullName}>نام کاربری | Username</span>
          <span className={style.city}>مکان | Loaction</span>
          <span className={style.instrumentName}>
            ساز اصلی | Main Instrument
          </span>
          <span className={style.level}>سطح | Level</span>
          <span className={style.style}>سبک | Style</span>
        </div>
      ) : (
        <div className={style.noResult}>نتیجه ای یافت نشد</div>
      )}
    </Fragment>
  )
}

export { TableTitle }
