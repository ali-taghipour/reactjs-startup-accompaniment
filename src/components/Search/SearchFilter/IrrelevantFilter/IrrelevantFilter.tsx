import React, { Fragment, useCallback } from "react"
import { useLocation, useHistory } from "react-router"
import queryString from "query-string"

import { CheckBox } from "../../../common/Form/Checkbox"

const IrrelevantFilter: React.FC = () => {
  const pathName: string = useLocation().pathname
  const history: any = useHistory()

  const handleChange: (e: any) => void = useCallback((e) => {
    const name: string = e.target.name
    const value: string = e.target.value
    const params: any = queryString.parse(window.location.search)
    const paramsUrl: any = new URLSearchParams(window.location.search)

    if (name === "irrelatedBadges") {
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
        name="irrelatedBadges"
        label="بازی های ویدیویی | Video games"
      />
      <CheckBox
        handleChange={handleChange}
        name="irrelatedBadges"
        label="کمپینگ | Camping"
      />
      <CheckBox
        handleChange={handleChange}
        name="irrelatedBadges"
        label="نجاری | Carpentry"
      />
      <CheckBox
        handleChange={handleChange}
        name="irrelatedBadges"
        label="سینما | Cinema"
      />
      <CheckBox
        handleChange={handleChange}
        name="irrelatedBadges"
        label="دوچرخه‌سواری | Cycling"
      />
      <CheckBox
        handleChange={handleChange}
        name="irrelatedBadges"
        label="الکترونیک | Electronics"
      />
      <CheckBox
        handleChange={handleChange}
        name="irrelatedBadges"
        label="باغ‌داری | Gardening"
      />
      <CheckBox
        handleChange={handleChange}
        name="irrelatedBadges"
        label="صنایع دستی | Handcrafts"
      />
      <CheckBox
        handleChange={handleChange}
        name="irrelatedBadges"
        label="هنر‌های رزمی | Martial Arts"
      />
      <CheckBox
        handleChange={handleChange}
        name="irrelatedBadges"
        label="مکانیک | Mechanics"
      />
      <CheckBox
        handleChange={handleChange}
        name="irrelatedBadges"
        label="موزه‌گردی | Museum"
      />
      <CheckBox
        handleChange={handleChange}
        name="irrelatedBadges"
        label="بازی‌های‌رایانه‌ای | PC Games"
      />
      <CheckBox
        handleChange={handleChange}
        name="irrelatedBadges"
        label="برنامه‌نویسی | Programming"
      />
      <CheckBox
        handleChange={handleChange}
        name="irrelatedBadges"
        label="ورزش | Sports"
      />
      <CheckBox
        handleChange={handleChange}
        name="irrelatedBadges"
        label="شنا | Swimming"
      />
      <CheckBox
        handleChange={handleChange}
        name="irrelatedBadges"
        label="تئاتر | Theater"
      />
    </Fragment>
  )
}

export { IrrelevantFilter }
