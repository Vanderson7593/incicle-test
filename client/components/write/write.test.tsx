import { render, screen } from '@test-suite'

import Write from '.'

const makeSut = () => render(<Write />)

describe(Write.name, () => {
  it('should render correctly', () => {
    makeSut()

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByLabelText('uploud-image-icon')).toBeInTheDocument()
    expect(screen.getByLabelText('uploud-video-icon')).toBeInTheDocument()
    expect(screen.getByLabelText('or-publish-article')).toBeInTheDocument()
  })
})
