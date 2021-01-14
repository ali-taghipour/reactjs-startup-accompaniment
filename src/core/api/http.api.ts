import axios from "axios"
import Cookie from "js-cookie"

axios.interceptors.request.use(
  (response) => {
    response.headers.common["Authorization"] = Cookie.get("accesstoken") + ""
    return response
  },
  function (error) {}
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  function (error) {
    const originalRequest = error.config

    if (
      error.response.status === 401 &&
      originalRequest.url ===
        "https://hamnavazi-api.azurewebsites.net/api/Account/RefreshToken"
    ) {
      window.location.href = "/Auth/Login"
      return Promise.reject(error)
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      // const refreshToken = Cookie.get("refreshtoken")
      const refreshToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmNDhiOTYxOC1jZGY1LTEyNDktNTY4Ni0xYjNhMTA2NzlkYjgiLCJpc3MiOiJodHRwczovL3BvcnRhbC5xZWF0ZWNoLmNvbS8iLCJpYXQiOjE2MDI2Njg2MjksImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvc2VyaWFsbnVtYmVyIjoiOTZlNTkxNWM4NzliN2VlMTU0ZjQ5Njg2NjQ5ZGQ1NzkiLCJuYmYiOjE2MDI2Njg2MjksImV4cCI6MTYwMjY5MDIyOSwiYXVkIjoiQW55In0.SVhosgAjsA3Iql7qjWUFTJ0s30pmVd3RrqikddIh004"
      axios.defaults.headers.common["refreshToken"] = refreshToken + ""

      return axios
        .post(
          "https://hamnavazi-api.azurewebsites.net/api/Account/RefreshToken"
        )
        .then((res) => {
          if (res.status === 200) {
            Cookie.set("accesstoken", res.headers.accesstoken)
            error.config.headers.Authorization = res.headers.accesstoken
            return axios(originalRequest)
          }
        })
    }
    return Promise.reject(error)
  }
)

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
}
