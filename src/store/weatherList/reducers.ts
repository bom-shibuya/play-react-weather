import { WeatherList } from '../../types'
import { Actions, FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from './actions'

export const initialState = {
  isError: false,
  isFetching: false,
  lastUpdateAt: null as null | number,
  list: [] as WeatherList
}

export type WeathersState = typeof initialState

export const weathers = (
  state = initialState,
  action: Actions
): WeathersState => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, isFetching: true }
    case FETCH_SUCCESS:
      return {
        isError: false,
        isFetching: false,
        lastUpdateAt: Date.now(),
        list: [...action.payload.data]
      }
    case FETCH_FAILURE:
      return {
        ...state,
        isError: true,
        lastUpdateAt: Date.now()
      }
    default:
      return state
  }
}

export interface IWetherListState {
  [key: string]: WeathersState
}

export const weatherList = (state = {}, action: Actions): IWetherListState => {
  switch (action.type) {
    case FETCH_REQUEST:
    case FETCH_SUCCESS:
    case FETCH_FAILURE:
      return {
        ...state,
        [action.payload.city]: weathers(initialState, action)
      }
    default:
      return state
  }
}
