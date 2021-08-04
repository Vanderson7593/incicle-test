import { EVisibility, EPub } from '@constants'
import { IUser } from './user'

export interface IPub {
  [EPub.User]: IUser
  [EPub.Visibility]: EVisibility
  [EPub.Comments]: number
  [EPub.Content]: string
  [EPub.Shares]: number
  [EPub.Likes]: IUser[]
  [EPub.DateTime]: Date
}
