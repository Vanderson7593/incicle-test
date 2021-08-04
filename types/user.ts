import { EUser } from 'constants/user'

export interface IUser {
  [EUser.Name]: string
  [EUser.About]: string
  [EUser.Address]: string
  [EUser.work]: string
  [EUser.ProfilePhoto]: string
  [EUser.HasStory]: boolean
  [EUser.CoverPhoto]: string
  [EUser.School]: string
}
