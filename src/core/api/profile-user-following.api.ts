import { useQuery } from "react-query"

import Http from "./http.api"
import { IFollowingList } from "./../models/profile-following-list.model"

const MainUrl = process.env.REACT_APP_MAIN_URL

const FollowingListUrl = MainUrl + "api/Account/UserFollowingListById"

const FollowingCountUrl = MainUrl + "api/Account/UserFollowingCountById"

// Api for get user following *****************************
async function GetFollowingListByIdApi(
  _: string,
  id: number
): Promise<IFollowingList[]> {
  const data = await Http.get(FollowingListUrl + "?id=" + id)
  const followerlist: IFollowingList[] = data.data.result
  return followerlist
}
// Api for get count of user following *****************************
async function GetFollowingCountByIdAPi(_: string, id: number) {
  const data = await Http.get(FollowingCountUrl + "?id=" + id)
  const count: number = data.data.result
  return count
}

// Query for get user following *****************************
function GetFollowingListQuery(id: number) {
  return useQuery(["FollowerList", id], GetFollowingListByIdApi, {
    initialData: [],
  })
}
// Query for get count of user following *****************************
function GetFollowingCountQuery(id: number) {
  return useQuery(["FollowerCount", id], GetFollowingCountByIdAPi, {
    initialData: 0,
  })
}
export { GetFollowingListQuery, GetFollowingCountQuery }
