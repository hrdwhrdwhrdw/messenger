import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { maxLength50 } from "../../../helpers/maxLength";
import { required } from "../../../validation/validation";
import CustomButton from "../../Button/Button";
import Checkbox from "../../Checkbox/Checkbox";
import { CustomInput } from "../../Controls/Input/Input";

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

export default LoginReduxForm;
