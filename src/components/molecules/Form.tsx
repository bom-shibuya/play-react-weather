import React from 'react'
import styled from 'styled-components'
import { Button, Input } from '../atoms'

interface IProps {
  placeholder?: string
  buttonText: React.ReactNode
  onSubmit: (text: string) => void
}

const CityNameForm = styled.form`
  display: flex;
`

const CityNameInput = styled.div`
  margin-right: 0.6rem;
`

const CityNameFormButton = styled.div``

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
    <CityNameForm onSubmit={handleSubmit}>
      <CityNameInput>
        <Input forwardRef={input} placeholder={placeholder} />
      </CityNameInput>
      <CityNameFormButton>
        <Button type="submit">{buttonText}</Button>
      </CityNameFormButton>
    </CityNameForm>
  )
}
