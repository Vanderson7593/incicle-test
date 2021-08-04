import { EVisibility } from '@constants'
import { render, screen } from '@test-suite'

import Visibility from '.'

const makeSut = (visibility: EVisibility) =>
  render(<Visibility visibility={visibility} />)

describe(Visibility.name, () => {
  it('should render correctly when visibility is all', () => {
    makeSut(EVisibility.All)

    expect(screen.getByText('Público')).toBeInTheDocument()
    expect(screen.queryByText('Somente eu')).not.toBeInTheDocument()
  })

  it('should render correctly when visibility is me', () => {
    makeSut(EVisibility.Me)

    expect(screen.getByText('Somente eu')).toBeInTheDocument()
    expect(screen.queryByText('Público')).not.toBeInTheDocument()
  })
})
