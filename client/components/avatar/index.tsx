/*eslint @typescript-eslint/no-explicit-any: off*/

import { FC } from 'react'
import { StoryBorder, StyledAvatar } from './avatar.styles'
import { default as Image } from 'next/image'
import { AvatarProps } from './avatar.types'

const Avatar: FC<AvatarProps> = ({ hasStory, src, width, height, alt }) => {
  return (
    <div style={{ position: 'relative' }}>
      {hasStory && (
        <StoryBorder
          aria-label="story-border"
          width={width as number}
          height={height as number}
        />
      )}
      <StyledAvatar>
        <div>
          <Image src={src as any} alt={alt} width={width} height={height} />
        </div>
      </StyledAvatar>
    </div>
  )
}

export default Avatar
