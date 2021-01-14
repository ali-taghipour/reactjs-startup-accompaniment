import React from "react"

import { color, align, bgColor } from "../../Color/Color"

type props = {
  text: string
  color: color
  align: align
  bgColor: bgColor
}

const P: React.FC<Partial<props>> = ({
  color = "",
  align = "",
  bgColor = "",
  text = "",
}) => {
  return (
    <>
      <p className={`${color} ${align} ${bgColor}`}> {text} </p>
    </>
  )
}

export { P }
