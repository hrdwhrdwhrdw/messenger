import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

export default function withAuthRedirect(Component) {
  class withAuthRedirect extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Navigate to="/login" />;
      }
      return <Component {...this.props} />;
    }
  }
  let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
  });

  let ConnectWithAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    withAuthRedirect
  );

  return ConnectWithAuthRedirectComponent;
}
