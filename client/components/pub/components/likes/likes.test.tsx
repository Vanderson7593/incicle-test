import { render, screen, userEvent } from '@test-suite'
import { IUser } from '@types'

import Likes from '.'

const mockHandleLike = jest.fn()

const makeSut = (like: boolean, likes: IUser[]) =>
  render(<Likes handleLike={mockHandleLike} like={like} likes={likes} />)

describe(Likes.name, () => {
  it('should render correctly user not like and pub has no likes', () => {
    makeSut(false, [] as IUser[])

    expect(screen.getByLabelText('like-icon')).toBeInTheDocument()
    expect(screen.getByText('Seja o primeiro a curtir')).toBeInTheDocument()
  })

  it('should render correctly user liked and pub has no likes', () => {
    makeSut(true, [] as IUser[])

    expect(screen.getByLabelText('unlike-icon')).toBeInTheDocument()
    expect(screen.getByText('Tu e 0 pessoas curtiram isso')).toBeInTheDocument()
  })

  it('should render correctly user liked and pub has likes', () => {
    makeSut(true, [{ name: 'Vanderson Telema' }] as IUser[])

    expect(screen.getByLabelText('unlike-icon')).toBeInTheDocument()
    expect(screen.getByText('Tu e 1 pessoas curtiram isso')).toBeInTheDocument()
  })

  it('should unlike/like on click', () => {
    makeSut(true, [{ name: 'Vanderson Telema' }] as IUser[])

    expect(screen.getByLabelText('unlike-icon')).toBeInTheDocument()
    expect(screen.getByText('Tu e 1 pessoas curtiram isso')).toBeInTheDocument()

    const button = screen.getByRole('button')

    userEvent.click(button)

    expect(mockHandleLike).toBeCalled()
    expect(mockHandleLike).toBeCalledTimes(1)
  })
})
