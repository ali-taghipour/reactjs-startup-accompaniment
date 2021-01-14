import React from "react"
import { NavLink } from "react-router-dom"

import classes from "./NavigationItem.module.css"

type Properties = {
  link: string
  children: any
}

const NavigationItem: React.FC<Properties> = (props) => (
  <NavLink className={classes.NavigationItem} to={props.link}>
    {props.children}
  </NavLink>
)

export default NavigationItem
