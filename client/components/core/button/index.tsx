import { FC } from 'react'
import { ButtonProps } from './button.types'
import { ButtonWrapper } from './button.styles'

const Button: FC<ButtonProps> = ({ label, icon, onclick, ariaLabel }) => {
  return (
    <ButtonWrapper role="button" onClick={onclick}>
      {icon && icon}
      <p aria-label={ariaLabel}>{label}</p>
    </ButtonWrapper>
  )
}

export default Button
