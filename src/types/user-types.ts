import { PhotoType } from "./profile-types"

export type UserType = {
  id: number,
  name: string,
  status: string,
  photos: PhotoType,
  followed: boolean
}