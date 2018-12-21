import { connect } from 'react-redux'
import { SideNav } from '../components/organisms'
import store from '../store'
import { switchCity } from '../store/currentCity'
import { fetchWeather } from '../store/weatherList'
import { AsyncDispatch, IRootState } from '../types'

interface IOwnProps {
  store?: unknown
}

const mapStateToProps = (state: IRootState, ownProps: IOwnProps) => ({
  cityList: Object.keys(state.weatherList)
})

const mapDispatchToProps = (dispatch: AsyncDispatch) => ({
  async onSubmit(city: string) {
    await dispatch(fetchWeather({ city }))
    dispatch(switchCity({ city }))
    console.log(store.getState())
  }
})

export const Nav = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNav)
