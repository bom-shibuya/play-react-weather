import { Actions, SWITCH_CITY } from './actions'

export interface ICurrentCityState {
  currentCity: string
}

export const initialState: ICurrentCityState = {
  currentCity: 'Tokyo'
}

export const currentCity = (state = initialState, action: Actions) => {
  switch (action.type) {
    case SWITCH_CITY:
      return { ...state, currentCity: action.payload.city }
    default:
      return state
  }
}
