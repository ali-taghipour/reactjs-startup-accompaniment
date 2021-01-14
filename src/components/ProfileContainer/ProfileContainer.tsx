import React from "react"

import { ProfileService } from "./ProfileService"
import { ProfileSideBar } from "./ProfileSideBar"
import { ProfileInfo } from "./ProfileInfo"
import { GetProfileDetailsQuery } from "../../core/api/profile-user-info.api"
import Styles from "./ProfileContainer.module.css"

const ProfileContainer: React.FC = () => {
  // const data = GetProfileDetailsQuery(76)

  return (
    <>
      <section className={`row ${Styles.dashboardPic} rtl mx-0`}>
        <div className="col-lg-3 col-md-4 pl-md-5 pl-0  pr-0">
          <ProfileSideBar />
        </div>
        <div className={`col-lg-9 col-md-8 ${Styles.dashboardHolder} ltr px-0`}>
          <ProfileInfo />
          <div className="row rtl">
            <div className="col-7 mt-md-3 mt-xl-1">
              <div
                className={`${Styles.dashboardIcon} d-none d-lg-block`}
              ></div>
            </div>
          </div>
          <ProfileService />
        </div>
      </section>
    </>
  )
}

export { ProfileContainer }
