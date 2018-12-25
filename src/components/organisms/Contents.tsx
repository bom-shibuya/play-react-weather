import React from 'react'
// import styled from 'styled-components'
import { WeathersState } from '../../store/weatherList'

interface IProps {
  cityName: string
  weathersState: WeathersState
}

export const Contents: React.SFC<IProps> = ({ cityName, weathersState }) => {
  console.log(weathersState)

  if (!weathersState) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{cityName} data!!!</h1>
      <div>last update: {weathersState.lastUpdateAt}</div>
      {weathersState.list.map(data => (
        <div key={data.dt}>
          <time>
            {new Date(+data.dt * 1000).toLocaleDateString('ja-JP', {
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              month: 'long',
              weekday: 'long',
              year: 'numeric'
            })}
            　
          </time>
        </div>
      ))}
    </div>
  )
}
