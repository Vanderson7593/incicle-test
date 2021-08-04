import { FC } from 'react'
import { ContainerProps } from './container.types'
import { StyledContainer } from './container.styles'
import theme from '@styles/theme'

const Container: FC<ContainerProps> = ({ children, color }) => {
  return (
    <StyledContainer
      aria-label={`container-${color ? color : theme.color.common.white}`}
      color={color}
    >
      {children}
    </StyledContainer>
  )
}

export default Container
