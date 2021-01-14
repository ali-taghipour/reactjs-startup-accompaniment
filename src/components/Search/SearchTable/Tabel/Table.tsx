import React from "react"
import { Level } from "../../../common/Levels/Level"

import style from "./Table.module.css"

type ITable = {
  item: {
    id: number
    username: string
    cityName: string
    instrumentName: string
    instrumentScore: string | number
    styleName: string
  }
}

const Table: React.FC<ITable> = ({ item }) => {
  return (
    <div className={style.searchTableItems} onClick={() => {}}>
      <span className={style.imageContainer}>
        <div className={style.stFramePicture}>
          <img alt="" />
        </div>
      </span>
      <span className={style.fullName}>{item.username}</span>
      <span className={style.city}>{item.cityName}</span>
      <span className={style.instrumentName}>{item.instrumentName}</span>
      <span className={style.level}>
        <span className={`levelText level${item.instrumentScore}`}>
          <Level instrumentScore={item.instrumentScore} />
        </span>
      </span>
      <span className={style.style}>{item.styleName}</span>
    </div>
  )
}

export { Table }
