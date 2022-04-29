import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import CustomButton from "../../../../components/Button/Button";
import Contact from "./Contact/Contact";
import { PURPLE } from "../../../../constants/styles";

export const ProfileData = ({ goToEditMode, ...props }) => {
  return (
    <div>
      <div className="profile__contact contact__item">
        <span className="profile__name">{props.profile.fullName}</span>
      </div>
      <div className="profile__contact contact__item">
        <span>Needs a job:</span>
        <span>
          {props.profile.lookingForAJob ? (
            <DoneIcon sx={{ color: PURPLE }} />
          ) : (
            <ClearIcon sx={{ color: PURPLE }} />
          )}
        </span>
      </div>
      <div className="profile__contact contact__item">
        <span>My skills:</span>
        <span>{props.profile.lookingForAJobDescription}</span>
      </div>
      <div className="profile__contact contact__item">
        <span>About me:</span>
        <span>{props.profile.aboutMe}</span>
      </div>
      <div className="profile__contacts">
        <span className="contact__title">My contacts:</span>
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={props.profile.contacts[key]}
            />
          );
        })}
        {props.isOwner && (
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
