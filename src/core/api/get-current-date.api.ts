import { useQuery } from "react-query"

import Http from "./http.api"

const GetCurrentYearUrl =
  "http://hamnavazi-api.azurewebsites.net/api/Setting/GetCurrentYear"

const getCurrentYear = () => {
  return Http.get(GetCurrentYearUrl)
    .then((res) => {
      return res.data.result
    })
    .catch((err) => {
      return
    })
}

export const useCurrentYear = () => {
  return useQuery("currentYear", getCurrentYear, {
    refetchOnWindowFocus: false,
  })
}
