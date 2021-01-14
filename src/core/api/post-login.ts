import { useMutation } from "react-query"
import Swal from "sweetalert2"

import Http from "./http.api"
const postLogin = (values: any) => {
  return Http.post("http://hamnavazi-api.azurewebsites.net/api/Account/Login", {
    username: values.username,
    password: values.password,
  })
    .then((res) => {
      Swal.fire({
        icon: "success",
        title: "ورود",
        text: "موفقیت آمیز بود",
        confirmButtonText: "بله",
      }).then(() => {
        window.location.replace("/Profile")
      })
      return res.data.result
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "ورود",
        text: "!موفقیت آمیز نبود",
        confirmButtonText: "بله",
      })
    })
}

export const usePostLogin = () => {
  return useMutation(postLogin)
}
