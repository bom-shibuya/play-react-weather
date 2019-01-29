import React from 'react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
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

const kelvinToC = (kelvin: number) => Math.floor(kelvin - 273.15)
const formatDate = (time: number) =>
  new Date(time).toLocaleDateString('ja-JP', {
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    month: 'long'
    // weekday: 'long',
    // year: 'numeric'
  })

export const Contents: React.SFC<IProps> = ({ cityName, weathersState }) => {
  console.log(weathersState)

  if (!weathersState || weathersState.isFetching) {
    return <StyledContents>Loading...</StyledContents>
  }

  if (weathersState.isError) {
    return <StyledContents>Error!! Please confirm your types...</StyledContents>
  }

  interface IChartData {
    current: number
    max: number
    min: number
    name: string
    weather: string
  }

  const chartData: IChartData[] = weathersState.list.map(data => ({
    current: kelvinToC(data.main.temp),
    max: kelvinToC(data.main.temp_max),
    min: kelvinToC(data.main.temp_min),
    name: formatDate(+data.dt * 1000),
    weather: data.weather[0].main
  }))

  return (
    <StyledContents>
      <ContentsTitle>{cityName} data!!!</ContentsTitle>
      <LastUpdate>last update: {weathersState.lastUpdateAt}</LastUpdate>
      <LineChart
        width={1200}
        height={300}
        data={chartData}
        margin={{ top: 5, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis unit="℃" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip label={'test'} />
        <Legend />
        <Line
          type="monotone"
          dataKey="current"
          stroke="#8884d8"
          // activeDot={{ r: 10 }}
        />
        <Line type="monotone" dataKey="max" stroke="#82ca9d" />
        <Line type="monotone" dataKey="min" stroke="#cccb44" />
      </LineChart>
    </StyledContents>
  )
}
