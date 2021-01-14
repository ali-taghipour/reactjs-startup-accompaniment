import { useMutation } from "react-query"

import Http from "./http.api"

const MainUrl = process.env.REACT_APP_MAIN_URL

const FollowUserUrl = MainUrl + "api/Account/FollowUser"

async function FollowUserApi(id: number) {
  return await Http.get(FollowUserUrl + "?followId=" + id)
}

export function FollowUserQuery() {
  return useMutation(FollowUserApi)
}
