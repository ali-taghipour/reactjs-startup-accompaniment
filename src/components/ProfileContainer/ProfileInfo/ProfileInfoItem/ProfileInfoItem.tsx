import React from "react"

import Styles from "./ProfileInfoItem.module.css"

type props = {
  toggleidentity: (num: number) => void
  text: string
  togglenumber: number
}

const ProfileInfoItem: React.FC<props> = ({
  toggleidentity,
  text,
  togglenumber,
}) => {
  return (
    <>
      <div
        className={`${Styles.item}`}
        onClick={() => toggleidentity(togglenumber)}
      >
        <span> {text} </span>
        <label> </label>
      </div>
    </>
  )
}

export { ProfileInfoItem }
