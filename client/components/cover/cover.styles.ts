import styled from '@emotion/styled'

export const StyledCover = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  img {
    @media (max-width: 766px) {
      width: 100vw !important;
    }
    width: 100% !important;
    height: 100%;
    border-radius: ${({ theme }) =>
        theme.radius.normal + ' ' + theme.radius.normal}
      0 0;
  }
`
