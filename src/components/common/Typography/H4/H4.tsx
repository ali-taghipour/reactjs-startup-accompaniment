import React from "react"

import { color, align, bgColor } from "../../Color/Color"

type props = {
  text: string
  color: color
  align: align
  bgColor: bgColor
}

const H4: React.FC<Partial<props>> = ({
  color = "",
  align = "",
  bgColor = "",
  text = "",
}) => {
  return (
    <>
      <h4 className={`${color} ${align} ${bgColor}`}> {text} </h4>
    </>
  )
}

export { H4 }
