import React from "react"

import Styles from "./x-style.module.css"

type props = { instrumentScore: string | number }

const Level: React.FC<props> = ({ instrumentScore }) => {
  const mainlevel = `level${instrumentScore}`
  return (
    <>
      <span className={Styles.level}>
        <span
          className={`${Styles.levelText} ${Styles[mainlevel]}`}
        >
          {instrumentScore === "1" && "مبتدی"}
          {instrumentScore === "2" && "متوسط"}
          {instrumentScore === "3" && "پیشرفته"}
          {instrumentScore === "4" && "حرفه ای"}
        </span>
      </span>
    </>
  )
}

export { Level }
