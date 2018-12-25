import React from 'react'
import { connect } from 'react-redux'
import { Contents } from '../components/organisms'
import { fetchWeather, WeathersState } from '../store/weatherList'
import { AsyncDispatch, IRootState } from '../types'

interface IProps {
  cityName: string
  weathersState: WeathersState
  dispatch: AsyncDispatch
}

const cityList = ['Tokyo', 'Osaka', 'Niigata']

class DisplayDateContents extends React.Component<IProps> {
  public componentDidMount() {
    const { dispatch } = this.props
    cityList.map(city =>
      dispatch(
        fetchWeather({
          city
        })
      )
    )
  }
  public render() {
    const { cityName, weathersState } = this.props
    return <Contents cityName={cityName} weathersState={weathersState} />
  }
}

const mapStateToProps = (state: IRootState) => ({
  cityName: state.currentCity,
  weathersState: state.weatherList[state.currentCity]
})

export const DisplayData = connect(mapStateToProps)(DisplayDateContents)