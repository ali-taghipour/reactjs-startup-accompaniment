import { useQuery } from "react-query"

import Http from "./http.api"

const MainUrl = process.env.REACT_APP_MAIN_URL

const IsUserFollowedUrl = MainUrl + "api/Account/IsUserFollowed"

async function IsUserFollowedUrlApi(_: string, id: number) {
  const data = await Http.get(IsUserFollowedUrl + "?id=" + id)
  const isFollowed: boolean = data.data.result
  return isFollowed
}

function IsUserFollowedUrlQuery(id: number) {
  const a = useQuery(["IsUserFollowed", id], IsUserFollowedUrlApi, {
    initialData: null,
  })
}

export { IsUserFollowedUrlQuery }
