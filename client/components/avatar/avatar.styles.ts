import styled from '@emotion/styled'

export const StyledAvatar = styled.div`
  div {
    display: flex;
    img {
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.color.common.white} !important;
    }
  }
`
export const StoryBorder = styled.div<{ width: number; height: number }>`
  position: absolute;
  border: 6px solid ${({ theme }) => theme.color.blue.dark};
  border-radius: 50%;
  width: ${({ width }) => width + 10}px;
  height: ${({ height }) => height + 10}px;
  bottom: -2.3px;
  left: -2.6px;
`
