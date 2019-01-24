import React from 'react'
import styled from 'styled-components'

interface IProps {
  onClick?: (e: React.MouseEvent) => void
  type?: string
  bgColor?: string
}

const StyledButton = styled.button<IProps>`
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: white;
  border: none;
  background-color: ${({ bgColor }) => bgColor || '#31c5c0'};
  padding: 0.4rem 0.6rem;
  border-radius: 0.2rem;
  cursor: pointer;
  vertical-align: middle;
`

export const Button: React.SFC<IProps> = props => (
  <StyledButton onClick={props.onClick} type={props.type || 'button'}>
    {props.children}
  </StyledButton>
)
