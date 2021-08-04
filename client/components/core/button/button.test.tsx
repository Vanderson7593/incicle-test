import { render, screen, userEvent } from '@test-suite'
import { Like } from '@components'

import Button from '.'
const mockOnClick = jest.fn()

const makeSut = (icon: JSX.Element, label: string) =>
  render(
    <Button icon={icon} label={label} ariaLabel="btn" onclick={mockOnClick} />
  )

describe(Button.name, () => {
  it('should render correctly when has no icon', () => {
    makeSut(undefined as unknown as JSX.Element, 'Like')

    expect(screen.getByText('Like')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should render correctly when has icon', () => {
    makeSut(<Like aria-label="like-icon" />, 'Like')

    expect(screen.getByLabelText('like-icon')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should call on click', () => {
    makeSut(<Like aria-label="like-icon" />, 'Like')

    const button = screen.getByRole('button')

    userEvent.click(button)

    expect(screen.getByLabelText('like-icon')).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(mockOnClick).toBeCalled()
    expect(mockOnClick).toBeCalledTimes(1)
  })
})
