import React from "react"
import { Link } from "react-router-dom"

import Styles from "./Footer.module.css"

const Footer: React.FC = () => {
  return (
    <>
      <footer className={`${Styles.panelFooter} py-3`}>
        <ul className={`text-center ${Styles.social}`}>
          <Link to="#">
            <img src="/Assets/Images/Icons/twiter-icon.png" alt="Not Found" />
          </Link>
          <Link to="#">
            <img src="/Assets/Images/Icons/linkdin-icon.png" alt="Not Found" />
          </Link>
          <Link to="#">
            <img src="/Assets/Images/Icons/facebook-icon.png" alt="Not Found" />
          </Link>
          <Link to="#">
            <img
              src="/Assets/Images/Icons/instagram-icon.png"
              alt="Not Found"
            />
          </Link>
        </ul>
        <ul className="text-center">
          <Link to="#"> HOME </Link> |<Link to="#"> ABOUTE </Link> |
          <Link to="#"> GALLERY </Link> |<Link to="#"> SHORT CODES </Link> |
          <Link to="#"> SERVICES </Link> |<Link to="#"> CONTSCT </Link>
        </ul>
        <ul className="text-center">
          <h6> © 2020 . All rights reserved </h6>
        </ul>
      </footer>
    </>
  )
}

export { Footer }
