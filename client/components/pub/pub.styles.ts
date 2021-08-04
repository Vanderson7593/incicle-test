import styled from '@emotion/styled'
import { StyledContainer } from '../container/container.styles'
// import { ContainerProps } from './container.types'

export const Container = styled(StyledContainer)`
  padding: 12px;
  .headerWrapper {
    display: flex;
    justify-content: space-between;
    width: 600px;

    @media (max-width: ${({ theme }) => theme.screen.sm}) {
      width: 100%;
    }
  }

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .user-details {
    div {
      display: flex;
      flex-direction: row;
      gap: 6px;
    }
  }

  .body {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .likesComments {
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: -17px;
    margin-top: 20px;

    div {
      display: flex;
      gap: 16px;
    }

    span {
      display: flex;
      gap: 5px;
      align-items: center;
      cursor: pointer;
    }
  }

  .footer {
    border-top: 1px solid ${({ theme }) => theme.color.grey.light};
    border-bottom: 1px solid ${({ theme }) => theme.color.grey.light};
    padding: 6px 0;
    display: flex;
    gap: 10px;
    margin: 20px 0 6px 0;
  }
`
