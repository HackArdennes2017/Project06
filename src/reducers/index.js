import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import items from 'reducers/items'

export default combineReducers({
  router,
  items,
})
