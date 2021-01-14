import React from "react"

import style from "./IsLoading.module.css"

type Size = "fullloading" | "mdLoading" | "smLoading"

const IsLoading: React.FC = () => {
  return <div className={style.fullloading}>Loading&#8230;</div>
}

export default IsLoading
