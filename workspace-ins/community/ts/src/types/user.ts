export interface User {
  _id: number,
  email: string,
  name: string,
  phone?: string,
  address?: string,
  type: 'user' | 'seller' | 'admin',
  loginType?: 'email' | 'kakao',
  profileImage?: string,
  profile?: string,
  token?: {
    accessToken: string,
    refreshToken: string,
  },
  createdAt: string,
  updatedAt: string,
}

export type UserInToken = Required<Pick<User, '_id' | 'name'>> & Pick<User, 'profile'> & {
  accessToken: string,
  refreshToken: string,
}; 
