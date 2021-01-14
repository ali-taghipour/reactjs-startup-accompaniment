import React from "react"

import style from "./SearchInput.module.css"

const SearchInput: React.FC = () => {
  return (
    <input
      className={style.searchInput}
      type="submit"
      value="Search | جستجو"
    />
  )
}

export { SearchInput }
