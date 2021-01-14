import jalaali from "jalaali-js"
import { Day } from "react-modern-calendar-datepicker"

function ConvertToTimeStamp(date: Day): number {
  const greDate = jalaali.toGregorian(date.year, date.month, date.day) // convert to gregorian

  var newDate = new Date() // for get hour seconds and minute
  const datum = new Date(
    greDate.gy,
    greDate.gm - 1,
    greDate.gd,
    newDate.getHours(),
    newDate.getMinutes(),
    newDate.getSeconds()
  )

  return datum.getTime() / 1000
}

export { ConvertToTimeStamp }
