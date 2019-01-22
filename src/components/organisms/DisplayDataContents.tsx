import React from 'react'
import { fetchWeather, WeathersState } from '../../store/weatherList'
import { AsyncDispatch } from '../../types'
import { Contents } from '../organisms'

// import styled from 'styled-components'
export interface IProps {
  cityName: string
  weathersState: WeathersState
  dispatch: AsyncDispatch
}

export const initialCityList = ['Tokyo', 'Osaka', 'Niigata']

export class DisplayDataContents extends React.Component<IProps> {
  public fetchInitialWeather(): Promise<void[]> {
    const { dispatch } = this.props
    return Promise.all(
      initialCityList.map(city =>
        dispatch(
          fetchWeather({
            city
          })
        )
      )
    )
  }
  public componentDidMount() {
    this.fetchInitialWeather()
  }
  public render() {
    const { cityName, weathersState } = this.props
    return <Contents cityName={cityName} weathersState={weathersState} />
  }
}
