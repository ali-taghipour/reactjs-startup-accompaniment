import { useQuery } from "react-query"

import Http from "./http.api"

const MainUrl = process.env.REACT_APP_MAIN_URL

const GetInstrumentsUrl = MainUrl + "api/Instrument/GetAllInstruments"

const getAllInstruments = () => {
  return Http.get(GetInstrumentsUrl)
    .then((res) => {
      return res.data.result
    })
    .catch((err) => {
      return
    })
}

export const useAllInstruments = () => {
  return useQuery("instruments", getAllInstruments, {
    retry: 1,
    retryDelay: 500,
    refetchOnWindowFocus: false,
  })
}
