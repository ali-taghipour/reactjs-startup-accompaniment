import { usePaginatedQuery } from "react-query"
import { ISearchInittial } from "../models/search.model"

import Http from "./http.api"

const MainUrl = process.env.REACT_APP_MAIN_URL
const SearchEndpoint = MainUrl + "api/Search/Search"

export const SearchApi = async (_: string, searchParams: ISearchInittial) => {
  const { data } = await Http.post(SearchEndpoint, searchParams)
  return data
}

export const useSearchResult = (searchParam: ISearchInittial) => {
  return usePaginatedQuery(["SearchResult", searchParam], SearchApi, {
    refetchOnWindowFocus: false,
  })
}
