import React from 'react'
import { Button, Input } from '../atoms'

interface IProps {
  placeholder?: string
  // buttonText: string
  onSubmit?: (e: React.FormEvent) => void
}

export const Form: React.SFC<IProps> = ({
  placeholder,
  // buttonText,
  onSubmit
}) => (
  <Form onSubmit={onSubmit}>
    <Input placeholder={placeholder} />
    <Button type="submit">SUBMIT</Button>
  </Form>
)
