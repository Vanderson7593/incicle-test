import styled from '@emotion/styled'
import { StyledContainer } from '../container/container.styles'

export const Container = styled(StyledContainer)`
  background-color: #fff;

  .orPublich {
    display: flex;
    flex-direction: row;
    gap: 5px;
    background-color: ${({ theme }) => theme.color.grey.dark};
    border-radius: ${({ theme }) => theme.radius.normal};
    padding: 7px 7px 7px 20px;
  }

  .link {
    color: ${({ theme }) => theme.color.blue.dark};
    transition: 0.3s;
    &:hover {
      color: ${({ theme }) => theme.color.blue.main};
    }
  }
`

export const WriteSomething = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    align-items: center;
    display: flex;
    padding: 20px;
    gap: 20px;
  }
  .cursorPointer {
    cursor: pointer;
  }
`
