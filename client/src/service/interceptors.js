import { message } from 'antd'

/* base interceptors for ajax*/
export default function defaultInterceptors (axios) {

  axios.interceptors.request.use(function (config) {
    return config
  }, function (error) {
    return Promise.reject(error)
  })

// Add a response interceptor
  axios.interceptors.response.use(function (response) {
    let resData = response.data

    if (response.status === 204 || resData.status === 204) {
      message.error('Error 204')
      return
    }

    if (response.status === 500 || resData.status === 500) {
      message.error('Error 500')
      return
    }

    return resData

  }, function (error) {
    console.log(error)
    if (error.response) message.error('Other Response Error')
    return Promise.reject(error)
  })
}
