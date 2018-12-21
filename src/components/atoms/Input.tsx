import React from 'react'

interface IProps {
  placeholder?: string
  forwardRef: React.RefObject<HTMLInputElement>
}

export const Input: React.SFC<IProps> = ({ placeholder, forwardRef }) => (
  <input ref={forwardRef} type="text" placeholder={placeholder || ''} />
)
