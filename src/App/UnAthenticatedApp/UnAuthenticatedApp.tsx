import React from "react"
import { DesignSystem } from "../../components/DesignSystem/DesignSystem"
import { Switch, Route } from "react-router-dom"

import { SearchScreen } from "../../screens/Search/SearchScreen"
import { Registration } from "../../screens/Register"
import { Login } from "../../screens/Login"
import { Header } from "../../components/UnAthenticatedHeader"
import { Profile } from "../../screens/Profile/Profile"
import { Footer } from "../../components/common/Footer"

function UnAuthenticatedApp() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={DesignSystem} />
        <Route exact path="/Search-result" component={SearchScreen} />
        <Route exact path="/auth/registration" component={Registration} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/Profile" component={Profile} />
      </Switch>
      <Footer />
    </div>
  )
}

export { UnAuthenticatedApp }
