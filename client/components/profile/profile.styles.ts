import styled from '@emotion/styled'
import { StyledContainer } from '../container/container.styles'

export const Main = styled.div`
  display: flex;
`

export const Container = styled(StyledContainer)`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.screen.sm}px) {
    width: 100vw;
    align-items: center;
  }
`

export const ImagesWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`

export const AvatarWrapper = styled.div`
  position: absolute;
  bottom: -70px;
`
export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  gap: 2px;

  div {
    margin-top: 20px;
    display: flex;
  }
`
export const UserInf = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 20px;
  gap: 6px;

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`
