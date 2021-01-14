import * as Yup from "yup"

export const validation = {
  firstName: Yup.string(),
  lastName: Yup.string(),
  cellphone: Yup.string().matches(
    /^(0|\+98)?([ ]|,|-|[()]){0,2}9[1|2|3|4]([ ]|,|-|[()]){0,2}(?:[0-9]([ ]|,|-|[()]){0,2}){8}$/,
    {
      message: "لطفا شماره تلفن همراه را به طور صحیح وارد نمائید",
    }
  ),
  username: Yup.string()
    .min(6, "نام کاربری حداقل باید 6 حرف باشد")
    .required("لطفا نام کاربری را به طور صحیح وارد نمائید"),
  eamil: Yup.string(),
  password: Yup.string()
    .min(8, "لطفا رمز عبور را به طور صحیح وارد نمائید(حداقل 8 کاراکتر)")
    .required("لطفا رمز عبور را به طور وارد نمائید"),
  repassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), undefined],
      "لطفا تکرار رمز عبور را به طور صحیح وارد نمائید"
    )
    .required("لطفا تکرار رمز عبور را به طور صحیح وارد نمائید"),
  gender: Yup.number(),
  yearOfBirthDate: Yup.number(),
  monthOfBirthDate: Yup.number(),
  dayOfBirthDate: Yup.number(),
  languageId1: Yup.number(),
  languageId2: Yup.number(),
  languageId3: Yup.number(),
  locationId: Yup.number(),
  locationId2: Yup.number(),
  locationId3: Yup.number(),
  locationTitle: Yup.string(),
  mainInstrument: Yup.number().moreThan(
    0,
    "لطفا ساز اصلی را به طور صحیح وارد نمائید"
  ),
  mainStartingDate: Yup.number(),
  mainLevel: Yup.number(),
  mainStyle1: Yup.number(),
  mainStyle2: Yup.number(),
  mainStyle3: Yup.number(),
  secondInstrument: Yup.number(),
  secondStartingDate: Yup.number(),
  secondLevel: Yup.number(),
  secondStyle1: Yup.number(),
  secondStyle2: Yup.number(),
  secondStyle3: Yup.number(),
  howKnowingUs: Yup.string(),
  reference: Yup.string(),
}
