/*eslint @typescript-eslint/no-explicit-any: off*/

import { FC } from 'react'
import { StyledCover } from './cover.styles'
import { default as Image, ImageProps } from 'next/image'

const Cover: FC<ImageProps> = (props) => {
  return (
    <StyledCover>
      <Image {...props} alt={props.alt} />
    </StyledCover>
  )
}

export default Cover
