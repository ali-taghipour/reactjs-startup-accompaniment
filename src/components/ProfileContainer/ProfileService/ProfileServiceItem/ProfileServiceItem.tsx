import * as React from "react"

import Styles from "./ProfileServiceItem.module.css"

type props = {
  text: string
  img: string
}

const ProfileServiceItem: React.FC<props> = ({ text, img }) => {
  return (
    <>
      <div className="col-lg-3 my-lg-0 my-4">
        <div className={`${Styles.servicItemTop}`}>
          <img src={img} />
        </div>
        <div className={Styles.servicItemBottom}> {text} </div>
      </div>
    </>
  )
}

export { ProfileServiceItem }
