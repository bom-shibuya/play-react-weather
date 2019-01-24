import React from 'react'
import styled from 'styled-components'

interface IProps {
  placeholder?: string
  forwardRef: React.RefObject<HTMLInputElement>
}

const StyledInput = styled.input`
  font-size: ${({ theme }) => theme.font.size.base};
  padding: 0.2rem 0.6rem;
  font-family: ${({ theme }) => theme.font.family.base};
`

export const Input: React.SFC<IProps> = ({ placeholder, forwardRef }) => (
  <StyledInput ref={forwardRef} type="text" placeholder={placeholder || ''} />
)
