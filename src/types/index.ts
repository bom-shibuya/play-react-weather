import { ActionCreator } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import {
  Actions as CurrentCityAction,
  CurrentCityState
} from '../store/currentCity'
import {
  Actions as WeatherListAction,
  IWetherListState
} from '../store/weatherList'

export interface IWeatherItem {
  dt: string
  main: {
    grnd_level: number
    humidity: number
    pressure: number
    sea_level: number
    temp: number
    temp_kf: number
    temp_max: number
    temp_min: number
  }
  weather: Array<{
    description: string
    id: number
    main: string
  }>
}

export type WeatherList = IWeatherItem[]

export type RootActions = CurrentCityAction | WeatherListAction
export interface IRootState {
  currentCity: CurrentCityState
  weatherList: IWetherListState
}

export type AsyncDispatch = ThunkDispatch<IRootState, undefined, RootActions>
export type AsyncAction = ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  RootActions
>
export type AsyncActionCreator = ActionCreator<AsyncAction>
