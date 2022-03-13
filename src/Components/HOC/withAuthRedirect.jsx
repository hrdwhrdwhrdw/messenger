import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export default function withAuthRedirect(Component) {
  class withAuthRedirect extends React.Component {
    render() {
      if (!this.props.isAuth) {
        debugger;
        return <Navigate to="/login" />;
      }
      return <Component {...this.props} />;
    }
  }

  let ConnectWithAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    withAuthRedirect
  );

  return ConnectWithAuthRedirectComponent;
}
