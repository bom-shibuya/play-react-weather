import axios from 'axios'
import { AsyncActionCreator, WeatherList } from '../../types'
import { fetchFailure, fetchRequest, fetchSuccess } from './actions'

const API_KEY = process.env.REACT_APP_API_KEY
const END_POINT = 'https://api.openweathermap.org/data/2.5/forecast'
const getRequestUrl = (cityName: string) =>
  `${END_POINT}?q=${cityName},JP&cnt=16&APPID=${API_KEY}`

export const fetchWeather: AsyncActionCreator = (payload: {
  city: string
}) => async dispatch => {
  dispatch(fetchRequest(payload))
  return axios.get(getRequestUrl(payload.city)).then(
    res => {
      const data = res.data as { list: WeatherList }
      dispatch(
        fetchSuccess({
          city: payload.city,
          data: data.list
        })
      )
    },
    _ => {
      dispatch(fetchFailure(payload))
    }
  )
}
