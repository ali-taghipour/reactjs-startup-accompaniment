import { ISearchInittial } from "../models/search.model"

export const SearchInittial: ISearchInittial = {
  locationId: 0,
  instrumentId: 0,
  styleId: 0,
  degree: 0,
  fromYear: 0,
  gender: 0,
  instrumentScore: 0,
  isWithLink: false,
  isWithPublications: false,
  isWithResearchs: false,
  isWithpPresentAccomplishments: false,
  languageId: 0,
  sortOn: 0,
  sortType: 0,
  untilYear: 0,
  page: 1,
  pageSize: 8,
  relatedBadges: null,
  irrelatedBadges: null,
  usernameOrFirstnameOrLastname: null,
}

export const NumbericParams: string[] = [
  "locationId",
  "instrumentId",
  "styleId",
  "degree",
  "fromYear",
  "gender",
  "instrumentScore",
  "languageId",
  "sortOn",
  "sortType",
  "untilYear",
  "page",
  "pageSize",
]

export const BooleanParams: string[] = [
  "isWithLink",
  "isWithPublications",
  "isWithResearchs",
  "isWithpPresentAccomplishments",
]

export const ArrayParams: string[] = [
  "relatedBadges",
  "irrelatedBadges",
  "usernameOrFirstnameOrLastname",
]
