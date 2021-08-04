import { generateName } from '../string'

describe('String utils', () => {
  it('should format string correctly', () => {
    expect(generateName('Vanderson Telema')).toBe('@vandersontelema')
  })
})
