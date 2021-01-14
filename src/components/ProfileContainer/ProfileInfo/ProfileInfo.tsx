import React, { useState } from "react"
import { useSpring, animated } from "react-spring"

import {
  FollowerJson,
  FollowingJson,
} from "../../../core/initialvalues/fake-api-profile"
import Styles from "./ProfileInfo.module.css"
import { ProfileInfoBody } from "./ProfileInfoBody/ProfileInfoBody"
import { ProfileInfoItem } from "./ProfileInfoItem/ProfileInfoItem"

const ProfileInfo: React.FC = () => {
  const [state, setstate] = useState(0)

  const toggleidentity = (num: number) => {
    num = num === state ? 0 : num
    console.log(num)
    setstate(num)
  }
  const fade = useSpring({
    left: 300,
    opacity: 1,
    visibility: "visible",
  })

  return (
    <>
      <div className={Styles.infoHolder}>
        <ProfileInfoItem
          text="ID | هویت"
          toggleidentity={toggleidentity}
          togglenumber={1}
        />
        <animated.div
          className={Styles.body}
          style={
            state === 1 ? fade : { opacity: 0, visibility: "hidden", left: 0 }
          }
        >
          <h5 className="text-right m-3"> پست الکترونیکی | Email </h5>
          <div className={`${Styles.useremail} rtl`}> hossein@gmail.com </div>
        </animated.div>
        <ProfileInfoItem
          text="Following | پیگیری ها"
          toggleidentity={toggleidentity}
          togglenumber={2}
        />
        <ProfileInfoBody
          text="Follower"
          followerList={FollowerJson}
          state={state}
          fade={fade}
          fadenum={2}
        />
        <ProfileInfoItem
          text=" Follower | پیگیری کننده ها "
          toggleidentity={toggleidentity}
          togglenumber={3}
        />
        <ProfileInfoBody
          text="Following"
          followerList={FollowingJson}
          state={state}
          fade={fade}
          fadenum={3}
        />
      </div>
    </>
  )
}

export { ProfileInfo }
