import { ImageProps } from 'next/image'

export type StyledAvatarProps = {
  hasStory: boolean
}

export type AvatarProps = ImageProps & StyledAvatarProps
