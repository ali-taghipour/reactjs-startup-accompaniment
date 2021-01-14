import { useQuery } from "react-query"

import Http from "./http.api"

const GetCountriesUrl =
  "http://hamnavazi-api.azurewebsites.net/api/Instrument/Location/GetCountysByCountryId"

const getCountiesById = (id: number) => {
  return Http.get(GetCountriesUrl, {
    params: {
      Id: id,
    },
  })
    .then((res) => {
      return res.data.result
    })
    .catch((err) => {
      return
    })
}

export const useAllCounties = (id: number) => {
  return useQuery(["counties", id], getCountiesById, {
    retry: 1,
    retryDelay: 500,
    refetchOnWindowFocus: false,
  })
}
