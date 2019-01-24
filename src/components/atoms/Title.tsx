import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.font.weight.black};
`

export const Title: React.SFC = () => (
  <StyledTitle>🌞 Search Weather 🌞</StyledTitle>
)
