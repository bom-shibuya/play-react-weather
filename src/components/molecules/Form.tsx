import React from 'react'
import { Button, Input } from '../atoms'

interface IProps {
  placeholder?: string
  buttonText: React.ReactNode
  onSubmit: (text: string) => void
}

let input: React.RefObject<HTMLInputElement>
input = React.createRef()

export const Form: React.SFC<IProps> = ({
  placeholder,
  buttonText,
  onSubmit
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input && input.current && input.current.value !== '') {
      onSubmit(input.current.value.trim())
      input.current.value = ''
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input forwardRef={input} placeholder={placeholder} />
      <Button type="submit">{buttonText}</Button>
    </form>
  )
}
