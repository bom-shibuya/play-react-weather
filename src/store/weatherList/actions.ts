import { WeatherList } from './types'

export const FETCH_REQUEST = 'FETCH_REQUEST'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

export const fetchRequest = (payload: { city: string }) => ({
  payload,
  type: FETCH_REQUEST as typeof FETCH_REQUEST
})

export interface IFetchSuccessPayload {
  city: string
  data: WeatherList
}

export const fetchSuccess = (payload: IFetchSuccessPayload) => ({
  payload,
  type: FETCH_SUCCESS as typeof FETCH_SUCCESS
})

export const fetchFailure = (payload: { city: string }) => ({
  payload,
  type: FETCH_FAILURE as typeof FETCH_FAILURE
})

export type Actions =
  | ReturnType<typeof fetchRequest>
  | ReturnType<typeof fetchSuccess>
  | ReturnType<typeof fetchFailure>
