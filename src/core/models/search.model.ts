export interface ISearchInittial {
  locationId: number
  instrumentId: number
  styleId: number
  degree: number
  fromYear: number
  gender: number
  instrumentScore: number
  isWithLink: boolean
  isWithPublications: boolean
  isWithResearchs: boolean
  isWithpPresentAccomplishments: boolean
  languageId: number
  sortOn: number
  sortType: number
  untilYear: number
  page: number
  pageSize: number
  relatedBadges: string[] | null
  irrelatedBadges: string[] | null
  usernameOrFirstnameOrLastname: string[] | null
}
