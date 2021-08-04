import { Write, Pub } from '@components'
import { FC } from 'react'
import { Container } from './feed.styles'
import { FeedProps } from './feed.types'
import { v4 as uuid } from 'uuid'

const Feed: FC<FeedProps> = ({ pubs }) => {
  return (
    <Container>
      <Write />
      {pubs.map((pub) => (
        <Pub key={uuid()} {...pub} />
      ))}
    </Container>
  )
}

export default Feed
