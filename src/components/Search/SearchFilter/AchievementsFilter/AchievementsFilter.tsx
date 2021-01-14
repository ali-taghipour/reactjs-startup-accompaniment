import React, { Fragment } from "react"
import { useLocation, useHistory } from "react-router"

import { CheckBox } from "../../../common/Form/Checkbox"

const AchievementsFilter: React.FC = () => {
  const pathName: string = useLocation().pathname
  const history: any = useHistory()

  const handleChange: (e: any) => void = (e) => {
    const params: any = new URLSearchParams(window.location.search)
    const name: string = e.target.name

    if (e.target.type === "checkbox" && e.target.checked) {
      params.set(name, true)
      history.replace(`${pathName}?${params.toString()}`)
    } else if (e.target.type === "checkbox" && !e.target.checked) {
      params.delete(name)
      history.replace(`${pathName}?${params.toString()}`)
    }
  }

  return (
    <Fragment>
      <CheckBox
        handleChange={handleChange}
        label="دارای نمونه کار | With Samples"
        name="isWithLink"
      />
      <CheckBox
        handleChange={handleChange}
        label="دارای تحقیقات | With Researches"
        name="isWithResearchs"
      />
      <CheckBox
        handleChange={handleChange}
        label="دارای انتشارات | With Publications"
        name="isWithPublications"
      />
      <CheckBox
        handleChange={handleChange}
        label="فعال | Active"
        name="isWithpPresentAccomplishments"
      />
    </Fragment>
  )
}

export { AchievementsFilter }
