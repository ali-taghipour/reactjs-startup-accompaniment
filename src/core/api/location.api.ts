import { useQuery } from "react-query"

import Http from "./http.api"

const MainUrl = process.env.REACT_APP_MAIN_URL
const CountryEndpoint = MainUrl + "api/Location/GetAllCountrys"
const CountyEndpoint =
  MainUrl + "api/Location/GetCountysByCountryId"
const CityEndpoint = MainUrl + "api/Location/GetCitysByCountyId"

//loaction api

export const CountriesApi = async () => {
  const { data } = await Http.get(CountryEndpoint)
  const AllCountries = await data.result
  return AllCountries
}

export const CountiesApi = async (Id: number) => {
  const { data } = await Http.get(`${CountyEndpoint}?Id=${Id}`)
  const AllCounties = await data.result
  return AllCounties
}

export const CitiesApi = async (Id: number) => {
  const { data } = await Http.get(`${CityEndpoint}?Id=${Id}`)
  const AllCities = await data.result
  return AllCities
}

//Custom hook

export const useCountries = () => {
  return useQuery("Countries", CountriesApi, {
    refetchOnWindowFocus: false,
  })
}

export const useCounties = (id: number) => {
  return useQuery(["Counties", id], CountiesApi, {
    refetchOnWindowFocus: false,
  })
}
export const useCities = (id: number) => {
  return useQuery(["Cities", id], CitiesApi, {
    refetchOnWindowFocus: false,
  })
}
