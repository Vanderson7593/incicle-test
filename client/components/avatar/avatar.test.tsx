import { render, screen } from '@test-suite'

import Avatar from '.'

const makeSut = (hasStory: boolean) =>
  render(
    <Avatar
      hasStory={hasStory}
      src="/me.jpg"
      width={30}
      height={30}
      alt="avatar"
    />
  )

describe(Avatar.name, () => {
  it('should render correctly when user has no story', () => {
    makeSut(false)

    expect(screen.queryByLabelText('story-border')).not.toBeInTheDocument()
    expect(screen.getByAltText('avatar')).toBeInTheDocument()
  })

  it('should render correctly when user has story', () => {
    makeSut(true)

    expect(screen.getByLabelText('story-border')).toBeInTheDocument()
    expect(screen.getByAltText('avatar')).toBeInTheDocument()
  })
})
