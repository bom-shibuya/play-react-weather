import React from 'react'

interface IProps {
  onClick?: (e: React.MouseEvent) => void
  type?: string
}

export const Button: React.SFC<IProps> = props => (
  <button onClick={props.onClick} type={props.type || 'button'}>
    {props.children}
  </button>
)
