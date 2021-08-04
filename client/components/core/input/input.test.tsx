import { render, screen } from '@test-suite'
import { Like } from '@components'

import Input from '.'

const makeSut = (icon: JSX.Element) =>
  render(<Input icon={icon} placeholder="Escreva algo" />)

describe(Input.name, () => {
  it('should render correctly when has no icon', () => {
    makeSut(undefined as unknown as JSX.Element)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should render correctly when has icon', () => {
    makeSut(<Like aria-label="like-icon" />)

    expect(screen.getByLabelText('like-icon')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
