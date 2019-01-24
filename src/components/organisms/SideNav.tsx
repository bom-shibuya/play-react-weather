import React from 'react'
import styled from 'styled-components'
import { Title } from '../atoms'
import { CityList, Form } from '../molecules'
interface IProps {
  onSubmit: (cityName: string) => void
  onClick: (cityName: string) => void
  cityList: string[]
}

const StyledSideNav = styled.div`
  padding: 2.4rem 1.6rem;
`

const SiteTitle = styled.div`
  margin-bottom: 1.2rem;
`

const SearchForm = styled.div`
  margin-bottom: 2.4rem;
`

export const SideNav: React.SFC<IProps> = ({ onSubmit, onClick, cityList }) => (
  <StyledSideNav id="nav">
    <SiteTitle>
      <Title />
    </SiteTitle>
    <SearchForm>
      <Form onSubmit={onSubmit} buttonText={'Search'} />
    </SearchForm>
    <CityList onClick={onClick} cityList={cityList} />
  </StyledSideNav>
)
