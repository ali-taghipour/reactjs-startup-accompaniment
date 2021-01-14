import { getAccessToken } from "../../core/api/post-access-token.api"
import { logout } from "../../core/api/post-logout.api"
export const tokenReducer: any = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        accessToken: action.payload.accessToken,
        refereshToken: action.payload.refereshToken,
      }
    case "accessTokenExpired":
      return getAccessToken(state.refereshToken)
        .then((token) => {
          if (token) {
            return { ...state, accessToken: token }
          } else {
            return { accessToken: null, refereshToken: null }
          }
        })
        .catch(() => {
          return state
        })

    case "exit":
      return logout()
        .then((res) => {
          if (res) {
            return { accessToken: null, refereshToken: null }
          } else {
            return state
          }
        })
        .catch(() => {
          return state
        })
    default:
      return state
  }
}
