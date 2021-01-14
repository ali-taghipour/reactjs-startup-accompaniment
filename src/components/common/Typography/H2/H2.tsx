import React from "react"

import { color, align, bgColor } from "../../Color/Color"

type props = {
  text: string
  color: color
  align: align
  bgColor: bgColor
}

const H2: React.FC<Partial<props>> = ({
  color = "",
  align = "",
  bgColor = "",
  text = "",
}) => {
  return (
    <>
      <h2 className={`${color} ${align} ${bgColor}`}> {text} </h2>
    </>
  )
}

export { H2 }
