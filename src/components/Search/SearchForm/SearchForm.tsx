import React, { Fragment } from "react"

import { InstrumentInput } from "./InstrumentInput"
import { StylesInput } from "./StylesInput"
import { LocationInput } from "./LocationInput"
import { SearchInput } from "../../common/Form/SearchInput"

import style from "./SearchForm.module.css"

const SearchForm: React.FC = () => {
  return (
    <Fragment>
      <form className={style.SearchForm}>
        <span
          className={style.locationType}
          // onClick={handleChangeLocation}
        />
        <div className={style.SearchInputContainer}>
          <LocationInput />
        </div>
        <div className={style.SearchInputContainer}>
          <InstrumentInput />
        </div>
        <div className={style.SearchInputContainer}>
          <StylesInput />
        </div>
        <div className={style.SearchInputContainer}>
          <SearchInput />
        </div>
      </form>
    </Fragment>
  )
}

export { SearchForm }
