import { useQuery } from "react-query"

import Http from "./http.api"

const GetCitiesUrl =
  "http://hamnavazi-api.azurewebsites.net/api/Instrument/Location/GetCitysByCountyId"

const getCitiesById = (id: number) => {
  return Http.get(GetCitiesUrl, {
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

export const useAllCities = (id: number) => {
  return useQuery(["cities", id], getCitiesById, {
    retry: 1,
    retryDelay: 500,
    refetchOnWindowFocus: false,
  })
}
