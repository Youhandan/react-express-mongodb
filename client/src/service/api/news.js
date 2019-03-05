/* eslint-disable */
import axios from 'axios'

import interceptors from '../interceptors'
const apiAddress = 'http://localhost:7101'

let http = axios.create({
  baseURL: apiAddress
})
http.defaults.headers.post['Content-Type'] = 'application/json'
interceptors(http)

export const newsApi = {
  save: (data) => http({ method: 'POST', url: `news`, data}),
  get: () => http({ method: 'GET', url: `news`}),
  detail: (id) => http({ method: 'GET', url: `news/${id}`}),
}