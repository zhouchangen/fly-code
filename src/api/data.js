
import { axios } from './http.js'

export const getTableData = () => {
  return axios.request({
    url: '/getTableData',
    method: 'get'
  })
}