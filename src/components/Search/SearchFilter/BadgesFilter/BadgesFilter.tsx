import React, { Fragment, useCallback } from "react"
import { useLocation, useHistory } from "react-router"

import queryString from "query-string"
import { CheckBox } from "../../../common/Form/Checkbox"

const BadgesFilter: React.FC = () => {
  const pathName: string = useLocation().pathname
  const history: any = useHistory()

  const handleChange: (e: any) => void = useCallback((e) => {
    const name: string = e.target.name
    const value: string = e.target.value
    const params: any = queryString.parse(window.location.search)
    const paramsUrl: any = new URLSearchParams(window.location.search)

    if (name === "relatedBadges") {
      const property = params[name] ? JSON.parse(params[name]) : []

      if (e.target.checked) {
        property.push(value)
        paramsUrl.set(name, JSON.stringify(property))
      } else if (!e.target.checked) {
        paramsUrl.set(name, JSON.stringify(property.filter((e) => e !== value)))
        property.length === 1 && paramsUrl.delete(name)
      }

      history.replace(`${pathName}?${paramsUrl.toString()}`)
    }
  }, [])

  return (
    <Fragment>
      <CheckBox
        handleChange={handleChange}
        name="relatedBadges"
        label="موسیقی کودکان | Child Music"
      />
      <CheckBox
        handleChange={handleChange}
        name="relatedBadges"
        label="کلاسیک | Classical"
      />
      <CheckBox
        handleChange={handleChange}
        name="relatedBadges"
        label="موسیقی‌شناسی قومی | Ethnomusicology"
      />
      <CheckBox
        handleChange={handleChange}
        name="relatedBadges"
        label="موسیقی فیلم | Film Music"
      />
      <CheckBox
        handleChange={handleChange}
        name="relatedBadges"
        label="ساز سازی | Instrument Making"
      />
      <CheckBox
        handleChange={handleChange}
        name="relatedBadges"
        label="موسیقی‌شناسی | Musicology"
      />
      <CheckBox
        handleChange={handleChange}
        name="relatedBadges"
        label="موسیقی‌درمانی | Music Therapy"
      />
      <CheckBox
        handleChange={handleChange}
        name="relatedBadges"
        label="غیرکلاسیک | None-classical"
      />
      <CheckBox
        handleChange={handleChange}
        name="relatedBadges"
        label="فلسفی | Philosophical"
      />
      <CheckBox
        handleChange={handleChange}
        name="relatedBadges"
        label="پژوهش | Research"
      />
      <CheckBox
        handleChange={handleChange}
        name="relatedBadges"
        label="طراحی اصوات | Sound Design"
      />
      <CheckBox
        handleChange={handleChange}
        name="relatedBadges"
        label="مهندسی اصوات | Sound Engineering"
      />
      <CheckBox
        handleChange={handleChange}
        name="relatedBadges"
        label="آموزش | Teaching"
      />
    </Fragment>
  )
}

export { BadgesFilter }
