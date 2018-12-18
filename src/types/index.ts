import { ActionCreator } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import {
  Actions as CurrentCityAction,
  ICurrentCityState
} from '../store/currentCity'
import {
  Actions as WeatherListAction,
  IWetherListState
} from '../store/weatherList'

export type RootActions = CurrentCityAction | WeatherListAction
export interface IRootState {
  currentCity: ICurrentCityState['currentCity']
  weatherList: IWetherListState[]
}

export type AsyncDispatch = ThunkDispatch<IRootState, undefined, RootActions>
export type AsyncAction = ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  RootActions
>
export type AsyncActionCreator = ActionCreator<AsyncAction>
