import React from "react";
import { reduxForm, InjectedFormProps } from "redux-form";
import { Field } from "redux-form";
import { Form } from "redux-form";
import CustomButton from "../../Button/Button";
import Checkbox from "../../Controls/Checkbox/Checkbox";
import renderIcons from "../../../helpers/renderIcons";
import { CustomInput } from "../../Controls/Input/Input";
import "./ProfileDataForm.scss";
import { ProfileType } from '../../../types/profile-types';
import { ProfileDataPropsType } from '../../../pages/profile-page/ProfileInfo/ProfileInfo';

const ProfileDataForm: React.FC<
InjectedFormProps<ProfileType, ProfileDataPropsType> &
ProfileDataPropsType
> = ({handleSubmit, error, profile, isOwner}) => {
  return (
    <Form onSubmit={handleSubmit}>
      {error && (
        <div className="summary">
          <div>{error}</div>
        </div>
      )}
      <div className="profile__contact contact__item">
        <span>Full Name:</span>
        <Field
          className="contact__input"
          name="fullName"
          component={CustomInput}
        />
      </div>
      <div className="profile__contact contact__item">
        <span>Needs a job:</span>
        <Checkbox name="lookingForAJob" />
      </div>
      <div className="profile__contact contact__item">
        <span>My skills:</span>
        <Field
          className="contact__input"
          name="lookingForAJobDescription"
          component={CustomInput}
        />
      </div>
      <div className="profile__contact contact__item">
        <span>About me:</span>
        <Field
          className="contact__input"
          name="aboutMe"
          component={CustomInput}
        />
      </div>
      <div>
        <span className="contact__title">My contacts:</span>
        {Object.keys(profile.contacts).map((key) => (
          <div className="profile__contact contact__item">
            {renderIcons(key)}
            <span>{key}:</span>
            <Field
              key={key}
              name={`contacts.${[key]}`}
              component={CustomInput}
              className="contact__input"
            />
          </div>
        ))}
        <div>
          {isOwner && (
            <CustomButton type="submit" className="profile__button">
              Save
            </CustomButton>
          )}
        </div>
      </div>
    </Form>
  );
};

const ProfileDataReduxForm = reduxForm({
  form: "profile-desc",
})(ProfileDataForm);

export default ProfileDataReduxForm;
