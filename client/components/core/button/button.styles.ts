import styled from '@emotion/styled'

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 5px;
  flex-grow: 1;
  border-radius: ${({ theme }) => theme.radius.strong};
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.grey.light};
  transition: 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.color.grey.dark};
  }
`
