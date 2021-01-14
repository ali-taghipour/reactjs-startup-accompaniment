import React, { useContext } from "react"

import { AuthenticatedApp } from "./AuthenticatedApp"
import { UnAuthenticatedApp } from "./UnAthenticatedApp"

import { TokenContext } from "../components/AuthContext"

const App: React.FC = () => {
  const { token } = useContext(TokenContext)

  return (
    <React.Fragment>
      {token.accessToken ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </React.Fragment>
  )
}

export default App
