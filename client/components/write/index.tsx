import { FC } from 'react'
import theme from '@styles/theme'
import { WriteSomething, Container } from './write.styles'
import { Video, Images, WriteSVG, Input } from '@components'

const Write: FC = () => {
  return (
    <Container style={{ height: 85 }}>
      <WriteSomething>
        <Input icon={<WriteSVG />} placeholder="Escreva uma publicação..." />
        <div>
          <Images className="cursorPointer" aria-label="uploud-image-icon" />
          <Video className="cursorPointer" aria-label="uploud-video-icon" />
        </div>
      </WriteSomething>
      <Container color={theme.color.grey.dark}>
        <div aria-label="or-publish-article" className="orPublich">
          <p>ou</p>
          <a className="link" href="#publish-article">
            pulique um artigo
          </a>
          <p>na InCicle</p>
        </div>
      </Container>
    </Container>
  )
}

export default Write
