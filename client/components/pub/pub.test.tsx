import { PUBS } from '@mocks'
import { render, screen, userEvent } from '@test-suite'

import Pub from '.'

const makeSut = (pub = PUBS[0]) => render(<Pub {...pub} />)

describe(Pub.name, () => {
  it('should render correctly', () => {
    makeSut()

    expect(screen.getByAltText('pub-user-image')).toBeInTheDocument()
    expect(screen.getByText(PUBS[0].user.name)).toBeInTheDocument()
    expect(screen.getByText('Somente eu')).toBeInTheDocument()
    expect(screen.getByText(PUBS[0].content)).toBeInTheDocument()
    expect(screen.getByText('Seja o primeiro a curtir')).toBeInTheDocument()
    expect(
      screen.getByText(`${PUBS[0].comments} comentários`)
    ).toBeInTheDocument()
    expect(
      screen.getByText(`${PUBS[0].shares} compartilhamentos`)
    ).toBeInTheDocument()
    expect(screen.getByLabelText('like-button')).toBeInTheDocument()
    expect(screen.getByLabelText('comment-button')).toBeInTheDocument()
    expect(screen.getByLabelText('share-button')).toBeInTheDocument()
  })

  it('should like/unlick on click', () => {
    makeSut()

    const likeButton = screen.getByLabelText('like-button')

    userEvent.click(likeButton)

    expect(screen.getByText('Tu e 0 pessoas curtiram isso')).toBeInTheDocument()

    userEvent.click(likeButton)

    expect(screen.getByText('Seja o primeiro a curtir')).toBeInTheDocument()
  })
})
