import { IPub, IUser } from '@types'
import { EVisibility } from '@constants'
import { USERS } from './user'

export const PUBS = [
  {
    user: USERS[0],
    content: 'Esta publicação esta em modo privado',
    comments: 0,
    datetime: new Date(),
    likes: [] as IUser[],
    shares: 0,
    visibility: EVisibility.Me,
  },
  {
    user: USERS[1],
    content: 'Esta publicação é em modo público',
    comments: 10,
    datetime: new Date(),
    likes: USERS as IUser[],
    shares: 10,
    visibility: EVisibility.All,
  },
] as ReadonlyArray<IPub>
