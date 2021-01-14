import React from "react"

import { color, align, bgColor } from "../../Color/Color"

type props = {
  text: string
  color: color
  align: align
  bgColor: bgColor
}

const H5: React.FC<Partial<props>> = ({
  color = "",
  align = "",
  bgColor = "",
  text = "",
}) => {
  return (
    <>
      <h5 className={`${color} ${align} ${bgColor}`}> {text} </h5>
    </>
  )
}

export { H5 }
