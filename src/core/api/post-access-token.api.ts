import Http from "./http.api"

const GetTokenUrl =
  "http://hamnavazi-api.azurewebsites.net/api/Account/RefreshToken"

export const getAccessToken = (refreshToken: string) => {
  return Http.post(GetTokenUrl, {
    refreshToken: refreshToken,
    rememberMe: false,
  })
    .then((res) => {
      return res.data.result
    })
    .catch((err) => {
      return null
    })
}
