import {
  Main,
  Container,
  AvatarWrapper,
  ImagesWrapper,
  DetailsWrapper,
  UserInf,
} from './profile.styles'
import { FC } from 'react'
import { Avatar, Cover, Location } from '@components'
import { ProfileProps } from './profile.types'
import { generateName } from '@utils/string'
import Work from '../svg/work'

const Profile: FC<ProfileProps> = ({ user }) => {
  const {
    about,
    address,
    coverPhoto,
    hasStory,
    name,
    profilePhoto,
    work,
    school,
  } = user

  return (
    <Main>
      <Container>
        <ImagesWrapper>
          <Cover
            src={coverPhoto}
            width={280}
            height={160}
            alt="user-cover-image"
          />
          <AvatarWrapper>
            <Avatar
              hasStory={hasStory}
              src={profilePhoto}
              width={120}
              height={120}
              alt="user-profile-image"
            />
          </AvatarWrapper>
        </ImagesWrapper>

        <DetailsWrapper>
          <p className="userName">{name}</p>
          <h4>{generateName(name)}</h4>
          <p>{about}</p>
        </DetailsWrapper>

        <UserInf>
          <div>
            <Location aria-label="location-icon" />
            <p>{address}</p>
          </div>
          <div>
            <div>
              <Work aria-label="work-icon" />
              <p>{work}</p>
            </div>
            <div>
              <Work aria-label="work-icon" />
              <p>{school}</p>
            </div>
          </div>
        </UserInf>
      </Container>
    </Main>
  )
}

export default Profile
