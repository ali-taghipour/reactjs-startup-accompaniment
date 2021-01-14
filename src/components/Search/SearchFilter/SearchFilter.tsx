import React, { Fragment } from "react"

// import { FilterData } from "./filter.data"

import { InfoFilter } from "./InfoFilter"
import { SortFilter } from "./SortFilter"
import { AchievementsFilter } from "./AchievementsFilter"
import { BadgesFilter } from "./BadgesFilter"
import { IrrelevantFilter } from "./IrrelevantFilter"

import style from "./SearchFilter.module.css"

type SearchFilterType = {
  filterToggle: boolean
  setFilterToggle: Function
}
const SearchFilter: React.FC<SearchFilterType> = ({
  filterToggle,
  setFilterToggle,
}) => {
  return (
    <Fragment>
      <div className={style.searchFilterContainer}>
        <div className={style.searchNavbar}>
          <span
            className={`${style.filterTitle} ${style.hide}`}
            onClick={() => setFilterToggle((prevState) => !prevState)}
          >
            فیلترها | Filters
          </span>
        </div>
        <ul
          className={
            filterToggle
              ? `${style.filterOptions} `
              : `${style.filterOptions} ${style.hide}`
          }
        >
          <li>
            <input type="checkbox" id="selectOption1" />
            <label
              htmlFor="selectOption1"
              className={style.optionContainerTitle}
            >
              اطلاعات | Info
            </label>
            <div className={style.optionContainerInputs}>
              <InfoFilter />
            </div>
          </li>
          <li>
            <input type="checkbox" id="selectOption2" />
            <label
              htmlFor="selectOption2"
              className={style.optionContainerTitle}
            >
              مرتب سازی | Sort
            </label>
            <div className={style.optionContainerInputs}>
              <SortFilter />
            </div>
          </li>
          <li>
            <input type="checkbox" id="selectOption3" />
            <label
              htmlFor="selectOption3"
              className={style.optionContainerTitle}
            >
              دست آورد ها | Achievements
            </label>
            <div className={style.optionContainerInputs}>
              <span className={style.CheckBoxTitle}>غیر مرتبط</span>
              <div className={style.CheckBoxContainer}>
                <AchievementsFilter />
              </div>
            </div>
          </li>
          <li>
            <input type="checkbox" id="selectOption4" />
            <label
              htmlFor="selectOption4"
              className={style.optionContainerTitle}
            >
              کلید‌ها، زمینه‌ها | Badges, Keywords
            </label>
            <div className={style.optionContainerInputs}>
              <span className={style.CheckBoxTitle}>
                مرتبط با موسیقی - کلید‌ها، زمینه‌ها | Badges, Keywords
              </span>
              <div className={style.CheckBoxContainer}>
                <BadgesFilter />
              </div>

              <span className={style.CheckBoxTitle}>غیر مرتبط</span>
              <div className={style.CheckBoxContainer}>
                <IrrelevantFilter />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Fragment>
  )
}

export { SearchFilter }
