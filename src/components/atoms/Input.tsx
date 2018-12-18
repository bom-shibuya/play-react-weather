import React from 'react'

interface IProps {
  placeholder?: string
}

export const Input: React.SFC<IProps> = props => (
  <input type="text" placeholder={props.placeholder || ''} />
)
