export interface IUserInstrumentStyle {
  id: number
  title: string
}

export interface IUserInstrument {
  instrumentId: number
  instrumentTitle: string
  score: number
  isMain: boolean
  startYear: number
  instrumentStyles: IUserInstrumentStyle[]
}

export interface IUserInfo {
  firstName: string | null
  lastName: string | null
  username: string | null
  gender: number | null
  genderTitle: string | null
  userInstrumnets: IUserInstrument[]
  email: string | null
  dayOfBirthDate: number | null
  monthOfBirthDate: number | null
  yearOfBirthDate: number | null
  locationId: number | null
  cellphone: string | null
  languageId1: number | null
  languageId2: number | null
  languageId3: number | null
}
