import { PhotoType } from "./profile-types"

export type UserType = {
  id: number,
  name: number,
  status: string,
  photos: PhotoType,
  followed: boolean
}