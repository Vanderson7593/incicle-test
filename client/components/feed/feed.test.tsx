import { PUBS } from '@mocks'
import { render, screen } from '@test-suite'
import { IPub } from '@types'

import Feed from '.'

const makeSut = (pubs = PUBS) => render(<Feed pubs={pubs as IPub[]} />)

describe(Feed.name, () => {
  it('should render correctly', () => {
    makeSut()

    PUBS.forEach(() => {
      expect(screen.getAllByAltText('pub-user-image').length).toBe(2)
      expect(screen.getAllByLabelText('like-button').length).toBe(2)
      expect(screen.getAllByLabelText('comment-button').length).toBe(2)
      expect(screen.getAllByLabelText('share-button').length).toBe(2)
    })
  })
})
