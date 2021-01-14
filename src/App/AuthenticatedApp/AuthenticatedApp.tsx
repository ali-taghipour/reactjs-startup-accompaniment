import React from "react"
import { DesignSystem } from "../../components/DesignSystem/DesignSystem"
import { Switch, Route } from "react-router-dom"

import { Profile } from "../../screens/Profile"
import { Header } from "../../components/AthenticatedHeader"
import { SearchScreen } from "../../screens/Search/SearchScreen"

function AuthenticatedApp() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={DesignSystem} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Search-result" component={SearchScreen} />
      </Switch>
    </div>
  )
}

export { AuthenticatedApp }
