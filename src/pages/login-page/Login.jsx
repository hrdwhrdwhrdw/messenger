import React from "react";
import "./Login.scss";
import { Navigate } from "react-router-dom";
import LoginReduxForm from "../../components/Forms/login-form/LoginForm";

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
