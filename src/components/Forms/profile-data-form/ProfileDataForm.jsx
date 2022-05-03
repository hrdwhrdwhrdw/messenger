import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { Form } from "redux-form";
import CustomButton from "../../Button/Button";
import Checkbox from "../../Controls/Checkbox/Checkbox";
import renderIcons from "../../../helpers/renderIcons";
import { CustomInput } from "../../Controls/Input/Input";
import "./ProfileDataForm.scss";

const ProfileDataForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      {props.error && (
        <div className="summary">
          {props.error.map((key) => (
            <div>{key}</div>
          ))}
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
        {Object.keys(props.profile.contacts).map((key) => (
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
          {props.isOwner && (
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
