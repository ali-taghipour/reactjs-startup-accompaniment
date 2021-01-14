import { useMutation } from "react-query"
import Swal from "sweetalert2"

import Http from "./http.api"

const postRgister = (values: any) => {
  return Http.post(
    "http://hamnavazi-api.azurewebsites.net/api/Account/FastSubscription",
    {
      username: values.username,
      password: values.password,
      firstName: values.firstName ? values.firstName : null,
      cellphone: values.cellphone ? values.cellphone : null,
      lastName: values.lastName ? values.lastName : null,
      email: values.email,
      dayOfBirthDate: values.dayOfBirthDate,
      monthOfBirthDate: values.monthOfBirthDate,
      yearOfBirthDate: values.yearOfBirthDate,
      locationId: values.locationId,
      languageId1: values.languageId1,
      languageId2: values.languageId2,
      languageId3: values.languageId3,
      locationTitle: values.locationTitle ? values.locationTitle : null,
      howKnowingUs: values.howKnowingUs ? values.howKnowingUs : null,
      reference: values.reference ? values.reference : null,
      gender: values.gender,
      userInstrumnets: [
        {
          instrumentId: values.mainInstrument,
          score: values.mainLevel,
          isMain: true,
          startYear: values.mainStartingDate,
          instrumentStyles: [
            values.mainStyle1,
            values.mainStyle2,
            values.mainStyle3,
          ],
        },
        {
          instrumentId: values.secondInstrument,
          score: values.secondLevel,
          isMain: false,
          startYear: values.secondStartingDate,
          instrumentStyles: [
            values.secondStyle1,
            values.secondStyle2,
            values.secondStyle3,
          ],
        },
      ],
    }
  )
    .then((res) => {
      Swal.fire({
        icon: "success",
        title: "ثبت نام",
        text: "موفقیت آمیز بود",
        confirmButtonText: "بله",
      }).then(() => {
        window.location.replace("/auth/login")
      })
      return res.data.result
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "ثبت نام",
        text: "!موفقیت آمیز نبود",
        confirmButtonText: "بله",
      })
    })
}

export const usePostRegister = () => {
  return useMutation(postRgister)
}
