import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html,
  body {
    font-family: Poppins, Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }
  input {
    border: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.8%;
  height: 100vh;
  .userName {
    color: ${({ theme }) => theme.color.text.secondary};
    font-size: 16pt;
    font-weight: bold;
  }
  .body2,
  .content,
  p {
    color: ${({ theme }) => theme.color.text.primary};
  }

  .body2 {
    font-size: 0.8rem;
  }

  .mainWrapper {
    display: flex;
    gap: 26px;
    @media (max-width: ${({ theme }) => theme.screen.sm}) {
      flex-direction: column;
    }
  }
`
