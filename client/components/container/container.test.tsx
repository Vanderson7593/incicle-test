import theme from '@styles/theme'
import { render, screen } from '@test-suite'

import Container from '.'

const makeSut = (color: string | undefined) =>
  render(<Container color={color} />)

describe(Container.name, () => {
  it('should render correctly with default color(white)', () => {
    makeSut(undefined)

    expect(
      screen.getByLabelText(`container-${theme.color.common.white}`)
    ).toBeInTheDocument()
  })

  it('should render with a custom color', () => {
    makeSut(theme.color.orange.main)

    expect(
      screen.getByLabelText(`container-${theme.color.orange.main}`)
    ).toBeInTheDocument()
  })
})
