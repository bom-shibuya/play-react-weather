import React from 'react'
import styled from 'styled-components'
import { WeathersState } from '../../store/weatherList'

const StyledContents = styled.div`
  padding: 2.4rem 1.6rem;
`
const ContentsTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.size.head};
  font-weight: ${({ theme }) => theme.font.weight.black};
`

const LastUpdate = styled.div``

interface IProps {
  cityName: string
  weathersState: WeathersState
}

const kelvinToC = (n: number) => n - 273.15

export const Contents: React.SFC<IProps> = ({ cityName, weathersState }) => {
  console.log(weathersState)

  if (!weathersState || weathersState.isFetching) {
    return <StyledContents>Loading...</StyledContents>
  }

  if (weathersState.isError) {
    return <StyledContents>Error!! Please confirm your types...</StyledContents>
  }

  return (
    <StyledContents>
      <ContentsTitle>{cityName} data!!!</ContentsTitle>
      <LastUpdate>last update: {weathersState.lastUpdateAt}</LastUpdate>
      {weathersState.list.map(data => (
        <div key={data.dt}>
          <time>
            {new Date(+data.dt * 1000).toLocaleDateString('ja-JP', {
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              month: 'long'
              // weekday: 'long',
              // year: 'numeric'
            })}
          </time>
          <h3>Weather</h3>
          <div>{data.weather[0].main}</div>
          <h3>Temparature</h3>
          <dl>
            <dt>current</dt>
            <dd>{kelvinToC(data.main.temp)}</dd>
            <dt>max</dt>
            <dd>{kelvinToC(data.main.temp_max)}</dd>
            <dt>min</dt>
            <dd>{kelvinToC(data.main.temp_min)}</dd>
          </dl>
        </div>
      ))}
    </StyledContents>
  )
}
