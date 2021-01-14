import { useQuery } from "react-query"

import Http from "./http.api"

const MainUrl = process.env.REACT_APP_MAIN_URL
const InstrumentEndpoint =
  MainUrl + "api/Instrument/GetAllInstruments"

export const InstrumentApi = async () => {
  const { data } = await Http.get(InstrumentEndpoint)
  const idiophones = await data.result.idiophones
  const membranophones = await data.result.membranophones
  const chordophones = await data.result.chordophones
  const aerophones = await data.result.aerophones
  const electrophones = await data.result.electrophones
  const other = await data.result.other

  const AllInstrument = [
    ...idiophones,
    ...membranophones,
    ...chordophones,
    ...aerophones,
    ...electrophones,
    ...other,
  ]

  return AllInstrument
}

export const useInstrument = () => {
  return useQuery("Instrument", InstrumentApi, {
    refetchOnWindowFocus: false,
  })
}
