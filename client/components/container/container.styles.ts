import styled from '@emotion/styled'
import { ContainerProps } from './container.types'

export const StyledContainer = styled.div<ContainerProps>`
  border-radius: ${({ theme }) => theme.radius.normal};
  background-color: ${({ color, theme }) =>
    color ? color : theme.color.common.white};
`
