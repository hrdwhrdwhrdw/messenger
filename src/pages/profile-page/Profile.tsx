import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import "./Profile.scss";
import Preloader from "../../components/Preloader/Preloader";
import { ProfileType } from "../../types/profile-types";

export type PropsType = {
  profile: ProfileType;
  isOwner: boolean;
  status: string;
  updateStatus: (status: string) => void;
  updatePhoto: (file: File) => void;
  setProfile: (profile: ProfileType) => Promise<ProfileType>;
};

const Profile: React.FC<PropsType> = ({
  isOwner,
  profile,
  status,
  updateStatus,
  updatePhoto,
  setProfile,
}) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className="profile">
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        updatePhoto={updatePhoto}
        setProfile={setProfile}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
