import React, { useContext, useState } from "react"

import NavigationItem from "../NavigationItem/NavigationItem"
import Logo from "../../assets/images/logo.png"
import Search from "../../assets/images/header/search-icon.png"
import Logout from "../../assets/images/header/logout-icon.png"

import { TokenContext } from "../AuthContext"

import classes from "./AthenticatedHeader.module.css"

const Header: React.FC = () => {
  const [show, setShow] = useState(false)

  const { dispatch } = useContext(TokenContext)

  const toggleSearchBox = () => {
    setShow(!show)
  }

  const handleQuit = () => {
    dispatch({ type: "exit" })
    window.location.replace("/")
  }

  return (
    <header>
      <NavigationItem link="/">
        <img src={Logo} alt="Logo" />
      </NavigationItem>
      <div className={classes.Option}>
        <button onClick={toggleSearchBox} className={"btn " + classes.Search}>
          <img src={Search} alt="Search" />
        </button>
        <span>
          <img src={Logout} alt="Logout" onClick={handleQuit} />
        </span>
        {show ? (
          <div className={classes.SearchBox}>
            <input
              type="text"
              placeholder="جست و جوی ..."
              className={"form-control " + classes.SearchInput}
            />
            <button className={"btn " + classes.SearchButton}>جست و جو</button>
          </div>
        ) : null}
      </div>
    </header>
  )
}

export { Header }
