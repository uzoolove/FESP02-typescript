import { User } from "./user"

export interface PostComment {
  _id: number,
  user_id: number,
  user: User,
  content: string,
  like: number,
  createdAt: string,
  updatedAt: string,
}

export interface Post {
  _id: number,
  type?: string,
  title: string,
  content: string,
  user: Pick<User, '_id' | 'name' | 'profileImage'>,
  views: number,
  repliesCount: number,
  replies?: PostComment[],
  createdAt: string,
  updatedAt: string,
}

