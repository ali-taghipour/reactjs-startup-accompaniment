import React, { useState, useRef } from "react"
import "react-modern-calendar-datepicker/lib/DatePicker.css"
import DatePicker, {
  DayValue,
  DayRange,
  Day,
} from "react-modern-calendar-datepicker"

import { Level } from "../common/Levels/Level"
import { H1 } from "../common/Typography/H1"
import { H2 } from "../common/Typography/H2"
import { H3 } from "../common/Typography/H3"
import { H4 } from "../common/Typography/H4"
import { H5 } from "../common/Typography/H5"
import { H6 } from "../common/Typography/H6"
import { P } from "../common/Typography/P"
import { Span } from "../common/Typography/Span"
import { ConvertToTimeStamp } from "../../core/utils/date-convertor.utils"
import { StayPrimaryLandscape } from "@material-ui/icons"

const DesignSystem: React.FC = () => {
  // const defaultValue:Day = {
  //   year: 2020,
  //   month: 10,
  //   day: 12,
  // };

  const [day, setDay] = React.useState<DayValue>(null)
  const [stamp, setStamp] = React.useState<number | null>(null)

  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="I'm a custom input"
      value={`${day?.day || ""}`}
      className="my-custom-input-class" // a styling class
    />
  )

  const handleDate = (e: Day) => {
    const stamp: number = ConvertToTimeStamp(e)
    setDay(e)
    setStamp(stamp)
  }

  return (
    <>
      <div className="container mt-5">
        <H1 text="Typography" color="color-green" />
        <H2 text="Headings" />
        <H1 text="H1  Design system hamnavazi" />
        <H2 text="H2  Design system hamnavazi" />
        <H3 text="H3  Design system hamnavazi" />
        <H4 text="H4  Design system hamnavazi" />
        <H5 text="H5  Design system hamnavazi" />
        <H6 text="H6  Design system hamnavazi" />
        <Span text="Span  Design system hamnavazi" />
        <P text="P  Design system hamnavazi" />

        <div className="d-flex justify-content-center align-items-center my-5">
          <div className="mx-3">
            <Level instrumentScore="1" />
          </div>
          <div className="mx-3">
            <Level instrumentScore="2" />
          </div>
          <div className="mx-3">
            <Level instrumentScore="3" />
          </div>
          <div className="mx-3">
            <Level instrumentScore="4" />
          </div>
        </div>

        <div className="d-flex justify-content-center py-4">
          <DatePicker
            value={day} // default value type (Day)
            onChange={handleDate} // onchange type (DayValue)
            inputPlaceholder="Select a day range" // :)
            colorPrimary="#9c88ff" // color when selected
            calendarTodayClassName="custom-today-day" // color today-span - config in index.css
            calendarClassName="responsive-calendar" // use for responsive
            locale="fa" // for change to persion-calendar
            renderInput={renderCustomInput} // ***** for use custom input with name - className and so on
            shouldHighlightWeekends // set red color for friday
          />
          <span> timestamp: {stamp} </span>
        </div>
      </div>
    </>
  )
}

export { DesignSystem }
