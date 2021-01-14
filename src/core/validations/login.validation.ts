import * as Yup from "yup"

export const validation = {
  username: Yup.string()
    .min(6, "نام کاربری حداقل باید 6 حرف باشد")
    .required("لطفا نام کاربری را به طور صحیح وارد نمائید"),
  password: Yup.string()
    .min(8, "لطفا رمز عبور را به طور صحیح وارد نمائید(حداقل 8 کاراکتر)")
    .required("لطفا رمز عبور را به طور وارد نمائید"),
}
