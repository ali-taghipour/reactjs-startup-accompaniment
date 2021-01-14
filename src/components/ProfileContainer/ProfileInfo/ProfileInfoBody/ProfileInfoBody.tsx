import React from "react"
import { useSpring, animated } from "react-spring"

import Styles from "./ProfileInfoBody.module.css"
import { Link } from "react-router-dom"
import IsLoading from "../../../common/IsLoading/IsLoading"

type props = {
  followerList: any
  text: string
  fade?: any
  state?: any
  fadenum: number
}

const ProfileInfoBody: React.FC<props> = ({
  followerList,
  text,
  fade,
  state,
  fadenum,
}) => {
  return (
    <>
      <animated.div
        className={Styles.body}
        style={
          state === fadenum
            ? fade
            : { opacity: 0, visibility: "hidden", left: 0 }
        }
      >
        <IsLoading />
        <div className={Styles.countHolder}>
          <span> {text} </span>
          <span className={Styles.count}> {followerList.length} </span>
        </div>

        {followerList.map((item: any) => (
          <Link
            key={item.id}
            to={`/panel/Profile?id=${item.id}`}
            className={Styles.followeritem}
          >
            <span> {item.username} </span>
            <img src="/Assets/Images/Icons/man.png" />
          </Link>
        ))}
      </animated.div>
    </>
  )
}

export { ProfileInfoBody }
