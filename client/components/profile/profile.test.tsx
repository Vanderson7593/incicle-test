import { USERS } from '@mocks'
import { render, screen } from '@test-suite'
import { generateName } from '@utils/string'

import Profile from '.'

const makeSut = (user = USERS[0]) => render(<Profile user={user} />)

describe(Profile.name, () => {
  it('should render correctly', () => {
    makeSut()

    expect(screen.getByAltText('user-cover-image')).toBeInTheDocument()
    expect(screen.getByAltText('user-profile-image')).toBeInTheDocument()
    expect(screen.getByText(USERS[0].name)).toBeInTheDocument()
    expect(screen.getByText(generateName(USERS[0].name))).toBeInTheDocument()
    expect(screen.getByText(USERS[0].about)).toBeInTheDocument()
    expect(screen.getByText(USERS[0].address)).toBeInTheDocument()
    expect(screen.getByText(USERS[0].work)).toBeInTheDocument()
    expect(screen.getByText(USERS[0].school)).toBeInTheDocument()
    expect(screen.getByLabelText('location-icon')).toBeInTheDocument()
    expect(screen.getAllByLabelText('work-icon').length).toBe(2)
  })
})
