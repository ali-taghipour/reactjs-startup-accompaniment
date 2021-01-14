import { useQuery } from "react-query"

import Http from "./http.api"

const MainUrl = process.env.REACT_APP_MAIN_URL
const StylesEndpoint = MainUrl + "api/Instrument/GetAllStyles"

export const StylesApi = async () => {
  const { data } = await Http.get(StylesEndpoint)
  const classical = await data.result.classical
  const ethnic = await data.result.ethnic
  const world = await data.result.world
  const popular = await data.result.popular
  const other = await data.result.other

  const AllStyles = [
    ...classical,
    ...ethnic,
    ...world,
    ...popular,
    ...other,
  ]
  return AllStyles
}

export const useStyles = () => {
  return useQuery("Styles", StylesApi, {
    refetchOnWindowFocus: false,
  })
}
