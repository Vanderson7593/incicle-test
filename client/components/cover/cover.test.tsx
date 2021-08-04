import { render, screen } from '@test-suite'

import Cover from '.'

const makeSut = () =>
  render(<Cover src="/me.jpg" width={32} height={32} alt="cover" />)

describe(Cover.name, () => {
  it('should render correctly', () => {
    makeSut()

    expect(screen.getByAltText('cover')).toBeInTheDocument()
  })
})
