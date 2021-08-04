import { formatDistance } from 'date-fns'

export const humanReadableDatetime = (date: Date): string =>
  formatDistance(date, new Date(), {
    addSuffix: true,
  })
