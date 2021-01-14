import React from "react"

import { Level } from "../../../common/Levels/Level"
import { IUserInstrument } from "./../../../../core/models/profile-userinfo.model"
import Styles from "./ProfileInstrumnet.module.css"

type props = {
  userInstrumnets: Array<IUserInstrument>
  index: number
  text: string
}

const ProfileInstrumnet: React.FC<props> = ({
  userInstrumnets,
  index,
  text,
}) => {
  return (
    <>
      {userInstrumnets.length > index && (
        <div className={Styles.sidebarBottom}>
          <h5 className="py-2">
            {text} : {userInstrumnets[index].instrumentTitle}{" "}
          </h5>
          <Level instrumentScore={`${userInstrumnets[index].score}`} />
          <h5 className="py-2"> سال شروع :</h5>
          <h5> {userInstrumnets[index].startYear} </h5>
          <h5> سبک : </h5>
          {userInstrumnets[index].instrumentStyles.map((item) => (
            <h5 key={item.id}> {item.title} </h5>
          ))}
        </div>
      )}
    </>
  )
}

export { ProfileInstrumnet }
