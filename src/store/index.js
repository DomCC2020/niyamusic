import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducers from '../reducers'

const middlewares = [
  thunkMiddleware
]

// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(require('redux-logger').createLogger())
// }

// const enchancer = applyMiddleware(...middlewares)

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
)

export default createStore(rootReducers, enhancer)
