import React from "react"

import style from "./ResultTitle.module.css"

const ResultTitle: React.FC = () => {
  return (
    <div className={style.searchResultContainer}>
      <span className={style.removeFilter} onClick={() => {}}>
        {" "}
        حذف فیلترها
      </span>
      <span className={style.showResult}>نتایج جستوجو | Search Results</span>
    </div>
  )
}

export { ResultTitle }
