import React from 'react'
// import styled from 'styled-components'

interface IProps {
  cityList: string[]
}

export const CityList: React.SFC<IProps> = ({ cityList }) => (
  <ul>
    {cityList.map(city => (
      <li key={city}>{city}</li>
    ))}
  </ul>
)
