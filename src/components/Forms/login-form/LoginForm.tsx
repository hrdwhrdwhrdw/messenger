import {
  LoginFormOwnPropsType,
  LoginFormValuesType,
} from "pages/login-page/Login";
import React from "react";
import { InjectedFormProps, Field, reduxForm } from "redux-form";
import { maxLength50 } from "../../../helpers/maxLength";
import { required } from "../../../validation/validation";
import CustomButton from "../../Button/Button";
import Checkbox from "../../Controls/Checkbox/Checkbox";
import { CustomInput } from "../../Controls/Input/Input";

const LoginForm: React.FC<
  InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> &
    LoginFormOwnPropsType
> = ({ handleSubmit, error, captchaURL }) => {
  return (
    <form onSubmit={handleSubmit} className="login__form">
      <div className="login__input-container">
        <Field
          placeholder="login"
          name="login"
          validate={[required, maxLength50]}
          component={CustomInput}
        />
      </div>
      <div className="login__input-container">
        <Field
          placeholder="password"
          name="password"
          validate={[required, maxLength50]}
          component={CustomInput}
          type="password"
        />
      </div>
      <div className="login__rememberMe">
        <span>remember me</span>
        <Checkbox name="remember" />
      </div>
      {error && <div className="summary">{error}</div>}
      {captchaURL && (
        <div className="login__captcha">
          <img src={captchaURL} className="captcha__image" alt="" />
        </div>
      )}
      {captchaURL && (
        <Field name="captcha" component={CustomInput} validate={[required]} />
      )}
      <CustomButton type="submit" sx={{ width: "50%", marginTop: "1rem", alignSelf: "center"}}>
        Log In
      </CustomButton>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginFormValuesType & LoginFormOwnPropsType>({
  form: "login",
})(LoginForm);

export default LoginReduxForm;
