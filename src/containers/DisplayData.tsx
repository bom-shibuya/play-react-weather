import React from 'react'
import { connect } from 'react-redux'
import { DisplayDataContents } from '../components/organisms'
import { IRootState } from '../types'

interface IOwnProps {
  store?: unknown
}

const mapStateToProps = (state: IRootState, Ownprops: IOwnProps) => ({
  cityName: state.currentCity,
  weathersState: state.weatherList[state.currentCity]
})

export const DisplayData = connect(mapStateToProps)(DisplayDataContents)
