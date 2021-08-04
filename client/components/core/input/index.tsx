import { FC } from 'react'
import { InputWrapper } from './input.styles'
import { InputProps } from './input.types'

const Input: FC<InputProps> = ({ icon, placeholder }) => {
  return (
    <InputWrapper>
      {icon && icon}
      <input
        role="textbox"
        type="text"
        className="inputText"
        placeholder={placeholder}
      />
    </InputWrapper>
  )
}

export default Input
