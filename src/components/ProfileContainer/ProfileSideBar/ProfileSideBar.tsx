import React from "react"

import Styles from "./ProfileSideBar.module.css"
import { UserDetails } from "../../../core/initialvalues/fake-api-profile"
import { ProfileInstrumnet } from "./ProfileInstrumnet/ProfileInstrumnet"
import { SideBarLanguage } from "./SideBarLanguage/SideBarLanguage"
import IsLoading from "../../common/IsLoading/IsLoading"

const ProfileSideBar: React.FC = () => {
  console.log(UserDetails)
  return (
    <>
      <aside className={Styles.dashboardSidebar}>
        <div className={Styles.topSidebar}>
          <IsLoading />
        </div>

        {UserDetails.username && (
          <div className={Styles.usernameSidebar}>
            <h2> {UserDetails.username} </h2>
          </div>
        )}

        {UserDetails.firstName && UserDetails.firstName && (
          <div className={Styles.userInfoSidebar}>
            <h2 className="rtl">
              {UserDetails.firstName} {UserDetails.lastName}{" "}
            </h2>
          </div>
        )}

        {UserDetails.genderTitle && (
          <div className={Styles.userInfoSidebar}>
            <h5 className="rtl"> جنسیت : {UserDetails.genderTitle} </h5>
          </div>
        )}

        {UserDetails.yearOfBirthDate !== 0 &&
          UserDetails.monthOfBirthDate !== 0 &&
          UserDetails.dayOfBirthDate !== 0 && (
            <div className={Styles.userInfoSidebar}>
              <h5 className="rtl">
                تاریخ تولد : {UserDetails.dayOfBirthDate} /{" "}
                {UserDetails.monthOfBirthDate} /{UserDetails.yearOfBirthDate}
              </h5>
            </div>
          )}

        <SideBarLanguage
          languageId1={UserDetails.languageId1}
          languageId2={UserDetails.languageId2}
          languageId3={UserDetails.languageId3}
        />

        {/* {
                UserDetails.country &&
            
                <div className="user-info-sidebar">
                    <h5 className="rtl">
                            موقعیت  : 
                        <br/>
                        <br/>
                        {UserDetails.country}
                        <br/>
                        <br/>
                        {UserDetails.city} 
                        <br/>   
                        <br/>                           
                        {UserDetails.countyName}                              
                    </h5>
                </div>     
                
            } */}

        <ProfileInstrumnet
          userInstrumnets={UserDetails.userInstrumnets}
          index={0}
          text="ساز اصلی"
        />
        <ProfileInstrumnet
          userInstrumnets={UserDetails.userInstrumnets}
          index={1}
          text="ساز اصلی"
        />
      </aside>
    </>
  )
}

export { ProfileSideBar }
