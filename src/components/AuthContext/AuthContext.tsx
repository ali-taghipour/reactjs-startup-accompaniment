import React, { createContext, useReducer, useEffect } from "react"

import { tokenReducer } from "../../reducers/token"

type DefaultValue = {
  token: any
  dispatch: any
}

export const TokenContext = createContext({
  token: { accessToken: null, refereshToken: null },
  dispatch: null,
} as DefaultValue)

const TokenContextProvider = (props) => {
  const [token, dispatch] = useReducer(
    tokenReducer,
    { accessToken: null, refereshToken: null },
    () => {
      const localData = localStorage.getItem("token")
      return localData
        ? JSON.parse(localData)
        : { accessToken: null, refereshToken: null }
    }
  )

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token))
  }, [token])

  const value = { token, dispatch }
  return (
    <TokenContext.Provider value={value}>
      {props.children}
    </TokenContext.Provider>
  )
}

export { TokenContextProvider }
