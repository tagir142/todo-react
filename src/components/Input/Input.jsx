import { StyledButton, StyledForm, StyledInput } from './Input.styles'
import { useState } from 'react'

export const Input = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    if (e.code === 'Enter' && value) {
      addTodo(value.trim())
      setValue('')
    }
  }
  const handleChange = () => {
    if (value) {
      addTodo(value)
      setValue('')
    }
  }
  return (<StyledForm >
      <StyledInput
      type='text'
      value={value}
      onChange={(e) => setValue(e.target.value)}

      onKeyDown={handleSubmit}

  />
  <StyledButton onClick={handleChange} >+</StyledButton>
      </StyledForm>
  )
}
