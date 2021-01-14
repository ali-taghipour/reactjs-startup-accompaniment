import { useMutation } from "react-query"

import Http from "./http.api"

const MainUrl = process.env.REACT_APP_MAIN_URL

const UnFollowUserUrl = MainUrl + "api/Account/UnFollowUser"

async function UnFollowUserApi(id: number) {
  return await Http.get(UnFollowUserUrl + "?followId=" + id)
}

export function FollowUserQuery() {
  return useMutation(UnFollowUserApi)
}
