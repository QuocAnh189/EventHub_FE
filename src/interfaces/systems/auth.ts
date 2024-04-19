import { IUser } from './user'

export interface IAuth {
  user: IUser
  accessToken: string
  refreshToken: string
}
