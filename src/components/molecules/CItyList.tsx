import React from 'react'
import styled from 'styled-components'

interface IProps {
  cityList: string[]
  onClick: (city: string) => void
}

const CityNameList = styled.ul``

const CityNameListItem = styled.li`
  cursor: pointer;
  transition: opacity 0.4s;
  &::before {
    content: '';
    display: inline-block;
    margin-right: 0.6rem;
    vertical-align: middle;
    border-left: 6px solid;
    border-top: 3px solid rgba(255, 255, 255, 0);
    border-bottom: 3px solid rgba(255, 255, 255, 0);
  }
  &:hover {
    opacity: 0.6;
  }
  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }
`

export const CityList: React.SFC<IProps> = ({ cityList, onClick }) => (
  <CityNameList>
    {cityList.map(city => (
      <CityNameListItem
        key={city}
        onClick={() => {
          onClick(city)
        }}
      >
        {city}
      </CityNameListItem>
    ))}
  </CityNameList>
)
