import React, { Fragment, useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router"

import { SelectOption } from "../../../common/Form/SelectOption"
import { DegreeList } from "../../../../core/utils/degree2-list.utils"
import { LevelList } from "../../../../core/utils/level-list.utils"
import { LanguageList } from "../../../../core/utils/language-list.utils"
import { GenderList } from "../../../../core/utils/gender2-list.utils"
import { GetCurrentYear } from "../../../../core/api/date.api"

interface IYear {
  id: number
  title: string
}

const InfoFilter: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<IYear[]>()
  const pathName: string = useLocation().pathname
  const history: any = useHistory()

  const handleChange: (e: any) => void = (e) => {
    const id: number = e.target.id
    const name: string = e.target.name

    const params: any = new URLSearchParams(window.location.search)
    params.set(name, id)
    history.replace(`${pathName}?${params.toString()}`)
  }

  useEffect(() => {
    try {
      const fetchData = async () => {
        const currentYears = await GetCurrentYear()
        setCurrentYear(currentYears)
      }
      fetchData()
    } catch (ex) {
      console.log(ex)
    }
  }, [])

  return (
    <Fragment>
      <SelectOption
        handleChange={handleChange}
        listData={LanguageList}
        name="languageId"
        label="زبان"
        placeholder="Language"
        searchStyle="filterSelectOption"
      />
      <SelectOption
        handleChange={handleChange}
        listData={LevelList}
        name="instrumentScore"
        label="سطح"
        placeholder="Level"
        searchStyle="filterSelectOption"
      />
      <SelectOption
        handleChange={handleChange}
        listData={DegreeList}
        name="degree"
        label="پایه"
        placeholder="Degree"
        searchStyle="filterSelectOption"
      />
      <SelectOption
        handleChange={handleChange}
        listData={currentYear}
        name="fromYear"
        label="از سال"
        placeholder="From Year"
        searchStyle="filterSelectOption"
      />
      <SelectOption
        handleChange={handleChange}
        listData={currentYear}
        name="untilYear"
        label="تا سال"
        placeholder="Untill Year"
        searchStyle="filterSelectOption"
      />
      <SelectOption
        handleChange={handleChange}
        listData={GenderList}
        name="gender"
        label="جنسیت"
        placeholder="Gender"
        searchStyle="filterSelectOption"
      />
    </Fragment>
  )
}

export { InfoFilter }
