import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from '../redux/store/store';

type MapStatePropsType = {
  isAuth: boolean
}

let mapStateToPropsForRedirect = (state: RootState) => ({
  isAuth: state.auth.isAuth,
});

export default function withAuthRedirect(Component) {
  class withAuthRedirect extends React.Component<MapStatePropsType> {
    render() {
      if (!this.props.isAuth) {
        return <Navigate to="/login" />;
      }
      return <Component {...this.props} />;
    }
  }

  let ConnectWithAuthRedirectComponent = connect<MapStatePropsType>(mapStateToPropsForRedirect)(
    withAuthRedirect
  );

  return ConnectWithAuthRedirectComponent;
}
