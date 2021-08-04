import { humanReadableDatetime } from '../date'

describe('Date utils', () => {
  it('should format date correctly', () => {
    expect(humanReadableDatetime(new Date())).toBe('less than a minute ago')
  })
})
