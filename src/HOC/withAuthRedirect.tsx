import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../redux/store/store";
import { getIsAuth } from "../redux/selectors/header-selectors";

let mapStateToProps = (state: RootState) => ({
  isAuth: getIsAuth(state),
});

type MapStatePropsType = ReturnType<typeof mapStateToProps>

export default function withAuthRedirect<P>(
  WrappedComponent: React.ComponentType
) {
  const RedirectComponent: React.FC<MapStatePropsType> = (props) => {
    if (!props.isAuth) {
      return <Navigate to="/login" />;
    }
    return <WrappedComponent {...props}/>;
  };
  let ConnectWithAuthRedirectComponent = connect<
    MapStatePropsType,
    P,
    RootState
  >(mapStateToProps)(RedirectComponent);
  return ConnectWithAuthRedirectComponent;
}
