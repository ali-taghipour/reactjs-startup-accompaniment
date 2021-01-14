import React from "react"
import { Link } from "react-router-dom"

import styles from "./HeaderFlag.module.css"

const HeaderFlag: React.FC = () => {
  return (
    <div className={styles.homeNewmember}>
      <Link to="#" className={styles.newmemberItem}>
        <div>
          <span> موسیقی دان ها </span>
          <span> Musicians </span>
        </div>
        <img alt="Musicians" src="/Assets/Images/Icons/piano-icon.png" />
      </Link>
      <Link to="#" className={styles.newmemberItem}>
        <div>
          <span> پیراموسیقی </span>
          <span> Service Provider </span>
        </div>
        <img alt="ServiceProvider" src="/Assets/Images/Icons/aux-icon.png" />
      </Link>
      <Link to="#" className={styles.newmemberItem}>
        <div>
          <span> گروه ها </span>
          <span> Bands </span>
        </div>
        <img alt="Bands" src="/Assets/Images/Icons/star-icon.png" />
      </Link>
    </div>
  )
}

export { HeaderFlag }
