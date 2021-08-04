import Head from 'next/head'
import theme from 'styles/theme'
import Home from '../client/views/home'
import { Container } from '../styles/global'

export default function Index(): JSX.Element {
  return (
    <>
      <Head>
        <title>InCicle .Inc</title>
      </Head>

      <Container style={{ backgroundColor: theme.color.grey.light }}>
        <main>
          <Home />
        </main>
      </Container>
    </>
  )
}
