import React from "react"

import Styles from "./profileservice.module.css"
import { ProfileServiceItem } from "./ProfileServiceItem/ProfileServiceItem"

const ProfileService: React.FC = () => {
  return (
    <>
      <div className={`row ${Styles.services} mx-0 justify-content-center`}>
        <ProfileServiceItem
          img="/Assets/Images/Icons/head-mail-icon.svg"
          text="پیغام | Message"
        />
        <ProfileServiceItem
          img="/Assets/Images/Icons/head-lamp-icon.svg"
          text="مشتاق | Keen"
        />
        <ProfileServiceItem
          img="/Assets/Images/Icons/head-share-icon.svg"
          text="به‌ اشتراک‌گذاری | Share"
        />
      </div>
    </>
  )
}

export { ProfileService }
