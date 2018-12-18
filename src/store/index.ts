import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { currentCity } from './currentCity'
import { weatherList } from './weatherList'

const rootReducer = combineReducers({ currentCity, weatherList })
const composeEnhancer =
  (window as any).__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

export default store
