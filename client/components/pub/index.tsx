import { FC, useState } from 'react'
import { Container } from './pub.styles'
import {
  Avatar,
  Button,
  Clock,
  Share,
  Comment,
  Like,
  UnLike,
} from '@components'
import theme from '@styles/theme'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PubProps } from './pub.types'
import { humanReadableDatetime } from '@utils/date'
import Visibility from './components/visibility'
import Likes from './components/likes'

const Pub: FC<PubProps> = ({
  comments,
  content,
  datetime,
  shares,
  user,
  visibility,
  likes,
}) => {
  const userLiked = likes.filter((thisUser) => thisUser === user)

  const [like, setLike] = useState<boolean>(
    userLiked.length === 0 ? false : true
  )

  const { hasStory, name, profilePhoto } = user

  const handleLike = () => setLike((prevState) => !prevState)

  const renderLikeIcon = (): JSX.Element => (like ? <UnLike /> : <Like />)

  return (
    <Container>
      <div className="headerWrapper">
        <div className="header">
          <Avatar
            hasStory={hasStory}
            src={profilePhoto}
            width={52}
            height={52}
            alt="pub-user-image"
          />
          <div className="user-details">
            <p className="userName">{name}</p>
            <div>
              <div>
                <Clock />
                <p className="body2">{humanReadableDatetime(datetime)}</p>
              </div>
              <div>
                <Visibility visibility={visibility} />
              </div>
            </div>
          </div>
        </div>

        <div style={{ cursor: 'pointer', marginRight: 10 }}>
          <FontAwesomeIcon
            size="xs"
            color={theme.color.common.black as string}
            icon={faChevronDown}
          />
        </div>
      </div>
      <div className="body">
        <p className="content">{content}</p>
      </div>

      <div className="likesComments">
        <Likes handleLike={handleLike} like={like} likes={likes} />
        <div>
          <p className="body2">{comments} comentários</p>
          <p className="body2">{shares} compartilhamentos</p>
        </div>
      </div>
      <div className="footer">
        <Button
          ariaLabel="like-button"
          onclick={handleLike}
          label="Curtir"
          icon={renderLikeIcon()}
        />
        <Button
          ariaLabel="comment-button"
          label="Comentar"
          icon={<Comment />}
        />
        <Button
          ariaLabel="share-button"
          label="Compartilhar"
          icon={<Share />}
        />
      </div>
    </Container>
  )
}

export default Pub
