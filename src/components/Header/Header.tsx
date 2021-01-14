import React from "react"

import { HeaderBody } from "./HeaderBody"
import { HeaderFlag } from "./HeaderFlags"

import style from "./Header.module.css"

const Header: React.FC = () => {
  return (
    <section className={style.topsection}>
      <div className={style.topsection}>
        <HeaderFlag />
        <HeaderBody />
      </div>
    </section>
  )
}

export { Header }
