import React from 'react'
// import styled from 'styled-components'

interface IProps {
  cityList: string[]
  onClick: (city: string) => void
}

export const CityList: React.SFC<IProps> = ({ cityList, onClick }) => (
  <ul>
    {cityList.map(city => (
      <li
        key={city}
        onClick={() => {
          onClick(city)
        }}
      >
        {city}
      </li>
    ))}
  </ul>
)
