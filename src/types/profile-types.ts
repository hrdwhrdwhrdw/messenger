export type PostType = {
  id: number;
  message: string;
  likesCount: number;
  isLiked: boolean;
};

export type ContactType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type PhotoType = {
  small: string;
  large: string;
};

export type ResponsePhotoDataType = {
  photos: PhotoType
}

export type ProfileType = {
  userId: number;
  lookingForAJob: string;
  aboutMe: string;
  lookingForAJobString: string;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactType;
  photos: PhotoType;
};