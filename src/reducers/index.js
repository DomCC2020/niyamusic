import { combineReducers } from 'redux'

import { recommend } from './recommend'
import { singer } from './singer'

export default combineReducers({
  recommend,
  singer
})
