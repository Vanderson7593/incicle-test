import '@testing-library/jest-dom'

import { ThemeProvider } from '@emotion/react'
import { render as __render } from '@testing-library/react'
import { FC, ReactElement } from 'react'
import theme from '@styles/theme'

const Wrapper =
  (): FC =>
  // eslint-disable-next-line react/display-name
  ({ children }) =>
    (
      <ThemeProvider theme={theme}>
        <div id="__next">{children}</div>
      </ThemeProvider>
    )

const customizedRender = (reactElement: ReactElement) =>
  __render(reactElement, { wrapper: Wrapper() })

export { customizedRender as render }
export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
