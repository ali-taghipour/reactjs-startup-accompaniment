import { useQuery } from "react-query"

import Http from "./http.api"

const MainUrl = process.env.REACT_APP_MAIN_URL

const GetStylesUrl = MainUrl + "api/Instrument/GetAllStyles"

const getAllStyles = () => {
  return Http.get(GetStylesUrl)
    .then((res) => {
      return res.data.result
    })
    .catch((err) => {
      return
    })
}

export const useAllStyles = () => {
  return useQuery("styles", getAllStyles, {
    retry: 1,
    retryDelay: 500,
    refetchOnWindowFocus: false,
  })
}
