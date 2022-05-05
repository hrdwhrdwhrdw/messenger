import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import CustomButton from "../../../../components/Button/Button";
import Contact from "./Contact/Contact";
import { PURPLE } from "../../../../constants/styles";
import { ProfileType } from "types/profile-types";

type ProfileDataType = {
  profile: ProfileType;
  goToEditMode: () => void;
  isOwner: boolean;
};

export const ProfileData: React.FC<ProfileDataType> = ({
  goToEditMode,
  isOwner,
  profile,
}) => {
  return (
    <div>
      <div className="profile__contact contact__item">
        <span className="profile__name">{profile.fullName}</span>
      </div>
      <div className="profile__contact contact__item">
        <span>Needs a job:</span>
        <span>
          {profile.lookingForAJob ? (
            <DoneIcon sx={{ color: PURPLE }} />
          ) : (
            <ClearIcon sx={{ color: PURPLE }} />
          )}
        </span>
      </div>
      <div className="profile__contact contact__item">
        <span>My skills:</span>
        <span>{profile.lookingForAJobDescription}</span>
      </div>
      <div className="profile__contact contact__item">
        <span>About me:</span>
        <span>{profile.aboutMe}</span>
      </div>
      <div className="profile__contacts">
        <span className="contact__title">My contacts:</span>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
        {isOwner && (
          <CustomButton
            type="submit"
            onClick={goToEditMode}
            className="profile__button"
          >
            Edit
          </CustomButton>
        )}
      </div>
    </div>
  );
};
