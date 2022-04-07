import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { Form } from "redux-form";
import '../../common/FormControl/FormControl.scss';

const ProfileDataForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      {props.error && <div className="summary">{props.error.map(key => <div>{key}</div>)}</div>}
      <div>
        <b>Full Name:</b>
        <Field name="fullName" component={"input"} />
      </div>
      <div>
        <b>Looking for a job:</b>
        <Field name="lookingForAJob" component={"input"} type="checkbox" />
      </div>
      <div>
        <b>My skills:</b>
        <Field name="lookingForAJobDescription" component={"input"} />
      </div>
      <div>
        <b>About me:</b>
        <Field name="aboutMe" component={"input"} />
      </div>
      <div>
        <b>My contacts:</b>
        {Object.keys(props.profile.contacts).map((key) => (
          <div>
            <b>{key}:</b>
            <Field key={key} name={`contacts.${[key]}`} component={"input"} />
          </div>
        ))}
        <div>
          <button type="submit">Save</button>
        </div>
      </div>
    </Form>
  );
};

const ProfileDataReduxForm = reduxForm({
  form: "profile-desc",
})(ProfileDataForm);

export default ProfileDataReduxForm;