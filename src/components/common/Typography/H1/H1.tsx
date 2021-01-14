import React from "react"

import { color, align, bgColor } from "../../Color/Color"

type props = {
  text: string
  color: color
  align: align
  bgColor: bgColor
}

const H1: React.FC<Partial<props>> = ({
  color = "",
  align = "",
  bgColor = "",
  text = "",
}) => {
  return (
    <>
      <h1 className={`${color} ${align} ${bgColor}`}> {text} </h1>
    </>
  )
}

export { H1 }
