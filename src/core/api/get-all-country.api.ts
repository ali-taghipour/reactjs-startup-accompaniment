import { useQuery } from "react-query"

import Http from "./http.api"

const GetCountriesUrl =
  "http://hamnavazi-api.azurewebsites.net/api/Instrument/Location/GetAllCountrys"

const getAllCountries = () => {
  return Http.get(GetCountriesUrl)
    .then((res) => {
      return res.data.result
    })
    .catch((err) => {
      return
    })
}

export const useAllCountries = () => {
  return useQuery("countries", getAllCountries, {
    retry: 1,
    retryDelay: 500,
    refetchOnWindowFocus: false,
  })
}
