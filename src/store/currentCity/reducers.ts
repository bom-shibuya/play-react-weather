import { Actions, SWITCH_CITY } from './actions'

export const initialState = 'Tokyo'

export type CurrentCityState = string

export const currentCity = (state = initialState, action: Actions) => {
  switch (action.type) {
    case SWITCH_CITY:
      return action.payload.city
    default:
      return state
  }
}
