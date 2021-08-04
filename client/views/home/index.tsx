import { FC } from 'react'
import { Profile, Feed } from '@components'
import { PUBS, USERS } from 'mocks'
import { IPub } from 'types'

const Home: FC = () => {
  return (
    <div className="mainWrapper">
      <div>
        <Profile user={USERS[0]} />
      </div>
      <div>
        <Feed pubs={PUBS as IPub[]} />
      </div>
    </div>
  )
}

export default Home
