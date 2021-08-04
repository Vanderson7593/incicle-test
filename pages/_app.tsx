import { globalStyles } from '../styles/global'
import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { ThemeProvider } from '@emotion/react'
import { defaultTheme } from '../styles'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
