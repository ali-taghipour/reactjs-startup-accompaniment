import { useQuery } from "react-query"

import Http from "./http.api"
import { IFollowerList } from "./../models/profile-follower-list.model"

const MainUrl = process.env.REACT_APP_MAIN_URL

const FollowerListUrl = MainUrl + "api/Account/UserFollowerListById"

const FollowerCountdUrl = MainUrl + "api/Account/UserFollowerCountById"

// Api for get user followers *****************************
async function GetFollowerListByIdApi(
  _: string,
  id: number
): Promise<IFollowerList[]> {
  const data = await Http.get(FollowerListUrl + "?id=" + id)
  const followerlist: IFollowerList[] = data.data.result
  return followerlist
}
// Api for get count of user followers *****************************
async function GetFollowerCountByIdAPi(_: string, id: number) {
  const data = await Http.get(FollowerCountdUrl + "?id=" + id)
  const count: number = data.data.result
  return count
}

// Query for get user followers *****************************
function GetFollowerListQuery(id: number) {
  const a = useQuery(["FollowerList", id], GetFollowerListByIdApi, {
    initialData: [],
  })
}
// Query for get count of user followers *****************************
function GetFollowerCountQuery(id: number) {
  return useQuery(["FollowerCount", id], GetFollowerCountByIdAPi, {
    initialData: 0,
  })
}
export { GetFollowerListQuery, GetFollowerCountQuery }
