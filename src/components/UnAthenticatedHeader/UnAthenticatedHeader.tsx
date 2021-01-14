import React, { Component } from "react"

import NavigationItem from "../NavigationItem"
import Logo from "../../assets/images/logo.png"
import Search from "../../assets/images/header/search-icon.png"
import Login from "../../assets/images/header/login-icon.png"
import SignUp from "../../assets/images/header/sign-up-icon.jpg"

import classes from "./UnAthenticatedHeader.module.css"
import { Link } from "react-router-dom"

class Header extends Component {
  state = {
    show: false,
  }

  toggleSearchBox = () => {
    let showStatus: boolean = this.state.show
    this.setState({ show: !showStatus })
  }

  render() {
    return (
      <header>
        <NavigationItem link="/">
          <img src={Logo} alt="Logo" />
        </NavigationItem>
        <div className={classes.Option}>
          <Link to="/Profile"> Test Profile </Link>
          <button
            onClick={this.toggleSearchBox}
            className={"btn " + classes.Search}
          >
            <img src={Search} alt="Search" />
          </button>
          <NavigationItem link="/auth/login">
            <img src={Login} alt="Login" />
          </NavigationItem>
          <NavigationItem link="/auth/registration">
            <img src={SignUp} alt="Sign Up" />
          </NavigationItem>
          {this.state.show ? (
            <div className={classes.SearchBox}>
              <input
                type="text"
                placeholder="جست و جوی ..."
                className={"form-control " + classes.SearchInput}
              />
              <button className={"btn " + classes.SearchButton}>
                جست و جو
              </button>
            </div>
          ) : null}
        </div>
      </header>
    )
  }
}

export { Header }
