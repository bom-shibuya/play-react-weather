import React from 'react'
import styled from 'styled-components'
import { Title } from '../atoms'
import { CityList, Form } from '../molecules'
interface IProps {
  onSubmit: (cityName: string) => void
  cityList: string[]
}

export const SideNav: React.SFC<IProps> = ({ onSubmit, cityList }) => (
  <div id="nav">
    <Title />
    <Form onSubmit={onSubmit} buttonText={'Search'} />
    <CityList cityList={cityList} />
  </div>
)
