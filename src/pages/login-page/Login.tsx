import React from "react";
import "./Login.scss";
import { Navigate } from "react-router-dom";
import LoginReduxForm from "../../components/Forms/login-form/LoginForm";
import { MapDispatchPropsType, MapStatePropsType } from "./LoginContainer";

export type LoginFormValuesType = {
  login: string;
  password: string;
  rememberMe: boolean;
  captcha?: string;
};

export type LoginFormOwnPropsType = {
  captchaURL?: string | null;
};

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    props.login(
      formData.login,
      formData.password,
      formData.rememberMe,
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
        <LoginReduxForm
          onSubmit={onSubmit}
          captchaURL={props.captchaURL}
          {...props}
        />
      </div>
    </div>
  );
};

export default Login;
