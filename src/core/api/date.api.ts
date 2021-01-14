import Http from "./http.api"

const MainUrl = process.env.REACT_APP_API_URL
const CurrentYear = MainUrl + "api/Setting/GetCurrentYear"

interface IYear {
  id: number
  title: string
}

export const GetCurrentYear = async () => {
  const { data } = await Http.get(CurrentYear)
  const currentYaer: number = await data.result

  const duration: number = currentYaer - 100
  let years: IYear[] = []

  for (var count = currentYaer; count > duration; count--) {
    years = [...years, { id: count, title: `${count}` }]
  }

  return years
}
