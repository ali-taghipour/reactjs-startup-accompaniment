import React, { Fragment } from "react"

import style from "./PhoneMode.module.css"

type IPhoneMode = {
  lastPage: number
  currentPage: number
}
const PhoneMode: React.FC<IPhoneMode> = ({ lastPage, currentPage }) => {
  return (
    <Fragment>
      <li key={22} className={style.paginationCountResponsive}>
        {`${lastPage}/${currentPage}`}
      </li>
    </Fragment>
  )
}

export { PhoneMode }
