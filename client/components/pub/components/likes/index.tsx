import { FC } from 'react'
import { UnLike, Like } from '@components'
import { IUser } from '@types'

const Likes: FC<{ likes: IUser[]; like: boolean; handleLike: () => void }> = ({
  handleLike,
  like,
  likes,
}) => {
  return like ? (
    <span role="button" onClick={handleLike}>
      <UnLike aria-label="unlike-icon" />
      <p className="body2">Tu e {likes.length} pessoas curtiram isso</p>
    </span>
  ) : (
    <span role="button" onClick={handleLike}>
      <Like aria-label="like-icon" />
      {likes.length === 0 ? (
        <p className="body2">Seja o primeiro a curtir</p>
      ) : (
        <p className="body2">{likes.length} pessoas curtiram isso</p>
      )}
    </span>
  )
}

export default Likes
