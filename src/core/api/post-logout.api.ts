import Http from "./http.api"

const logoutUrl = "http://hamnavazi-api.azurewebsites.net/api/Account/Logout"

export const logout = () => {
  return Http.post(logoutUrl)
    .then((res) => {
      return res.data.result
    })
    .catch((err) => {
      return null
    })
}
