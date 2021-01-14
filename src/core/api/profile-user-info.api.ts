import { useQuery } from "react-query"
import { InitialUserDetails } from "../initialvalues/profile-userinfo.initialvalue"

import Http from "./http.api"
import { IUserInfo } from "./../models/profile-userinfo.model"

const MainUrl = process.env.REACT_APP_MAIN_URL

const ProfileUserByIdUrl = MainUrl + "api/Account/GetUserDetailsById"

// Api for get user details *****************************
async function GetProfileDetailsApi(_: string, id: number) {
  const data = await Http.get(ProfileUserByIdUrl + "?id=" + id)
  const mydata: IUserInfo = data.data.result
  return mydata
}
// Query for get user details *****************************
function GetProfileDetailsQuery(id: number) {
  return useQuery(["ProfileDetails", id], GetProfileDetailsApi, {
    initialData: InitialUserDetails,
  })
}

export { GetProfileDetailsQuery }
