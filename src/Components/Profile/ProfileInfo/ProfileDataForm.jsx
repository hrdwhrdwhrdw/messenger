import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { Form } from "redux-form";
import "../../common/FormControl/FormControl.scss";
import CustomButton from "../../common/Button/Button";
import { CustomInput } from "../../common/FormControl/FormControl";
import { renderIcons } from "./ProfileInfo";
import Checkbox from "../../common/Checkbox/Checkbox";

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
        <Field name="fullName" component={CustomInput} />
      </div>
      <div className="profile__contact contact__item">
        <span>Needs a job:</span>
        <Checkbox name="lookingForAJob"/>
      </div>
      <div className="profile__contact contact__item">
        <span>My skills:</span>
        <Field name="lookingForAJobDescription" component={CustomInput} />
      </div>
      <div className="profile__contact contact__item">
        <span>About me:</span>
        <Field name="aboutMe" component={CustomInput} />
      </div>
      <div>
        <span>My contacts:</span>
        {Object.keys(props.profile.contacts).map((key) => (
          <div className="profile__contact contact__item">
            {renderIcons(key)}
            <span>{key}:</span>
            <Field
              key={key}
              name={`contacts.${[key]}`}
              component={CustomInput}
            />
          </div>
        ))}
        <div>
          {props.isOwner && <CustomButton type="submit">Save</CustomButton>}
        </div>
      </div>
    </Form>
  );
};

const ProfileDataReduxForm = reduxForm({
  form: "profile-desc",
})(ProfileDataForm);

export default ProfileDataReduxForm;
