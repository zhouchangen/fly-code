import Mock from 'mockjs'
import { getTableData } from './data'
const Random = Mock.Random

Mock.mock(/\/getTableData/, 'get', getTableData)

Mock.setup({
  timeout: 0
})

export default Mock
