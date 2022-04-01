import React from "react";
import { Navigate } from "react-router-dom";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validation";
import { Input } from "../common/FormControl/FormControl";

const maxLength50 = maxLengthCreator(50)

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
      <button type="submit">Login</button>
    </form>
  );
}

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  let onSubmit = (formData) => {
    props.login(formData.login, formData.password, formData.remember)
  };
  
  if (props.isAuth) {
    return <Navigate to="/profile"/>
  }
  return (
    <div>
      <div>Login</div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
}

export default Login;