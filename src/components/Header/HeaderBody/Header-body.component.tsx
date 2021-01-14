import React from "react"

import { SearchForm } from "../../Search/SearchForm"

import style from "./HeaderBody.module.css"

const HeaderBody: React.FC = () => {
  return (
    <div>
      <h2 className={style.persianText}> ! این‌جا ، زبان نخست موسیقی است </h2>
      <h2 className={style.englishText}> Here, the First Language is Music!</h2>
      <SearchForm />
    </div>
  )
}

export { HeaderBody }
