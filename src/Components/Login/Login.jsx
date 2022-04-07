import React from "react";
import { Navigate } from "react-router-dom";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validation";
import { Input } from "../common/FormControl/FormControl";

const maxLength50 = maxLengthCreator(50);

function LoginForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="login"
          name="login"
          component={Input}
          validate={[required, maxLength50]}
          dataType="input"
        />
      </div>
      <div>
        <Field
          placeholder="password"
          name="password"
          component={Input}
          validate={[required, maxLength50]}
          dataType="input"
          type="password"
        />
      </div>
      <div>
        <Field
          name="remember"
          type={"checkbox"}
          component={Input}
          dataType="input"
        />
        remember me
      </div>
      {props.error && <div className="summary">{props.error}</div>}
      {props.captcha && <img src={props.captcha} alt="" />}
      {props.captcha && <Field name="captcha" dataType="input" component={Input} validate={[required]}/>}
      <button type="submit">Login</button>
    </form>
  );
}

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);


const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.login, formData.password, formData.remember, formData.captcha);
  };

  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <div>
      <div>Login</div>
      <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
    </div>
  );
};

export default Login;
