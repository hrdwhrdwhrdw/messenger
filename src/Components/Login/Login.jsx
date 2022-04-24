import React from "react";
import "./Login.scss";
import { Navigate } from "react-router-dom";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validation";
import { CustomInput } from "../common/FormControl/FormControl";
import CustomButton from "../common/Button/Button";
import Checkbox from "../common/Checkbox/Checkbox";

const maxLength50 = maxLengthCreator(50);

function LoginForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="login__input-container">
        <Field
          placeholder="login"
          name="login"
          component={CustomInput}
          validate={[required, maxLength50]}
          autoComplete="off"
        />
      </div>
      <div className="login__input-container">
        <Field
          placeholder="password"
          name="password"
          component={CustomInput}
          validate={[required, maxLength50]}
          type="password"
          autoComplete="off"
        />
      </div>
      <div className="login__rememberMe">
        <span>remember me</span>
        <Checkbox name="remember" />
      </div>
      {props.error && <div className="summary">{props.error}</div>}
      {props.captcha && <img src={props.captcha} alt="" />}
      {props.captcha && (
        <Field name="captcha" component={CustomInput} validate={[required]} />
      )}
      <CustomButton type="submit" sx={{ width: "100%", marginTop: "1rem" }}>
        Log In
      </CustomButton>
    </form>
  );
}

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.login,
      formData.password,
      formData.remember,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <div className="login__container">
      <div className="login__content">
        <div className="login__title">Login</div>
        <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha} />
      </div>
    </div>
  );
};

export default Login;
