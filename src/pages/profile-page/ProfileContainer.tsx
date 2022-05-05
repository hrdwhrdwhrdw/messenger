import React, { Component, useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getProfileData,
  updateStatus,
  requestStatus,
  updatePhoto,
  setProfile,
} from "../../redux/thunks/profileThunks";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { compose } from "redux";
import { PropsType, withRouter } from "../../HOC/withRouter";
import { RootState } from "../../redux/store/store";
import {
  getProfile,
  getStatus,
  getAuthUserId,
  getIsAuth,
} from "../../redux/selectors/profile-selectors";
import { ProfileType } from "types/profile-types";
import { useNavigate } from "react-router-dom";

export type MapStatePropsType = ReturnType<typeof mapStateToProps>;

export type MapDispatchPropsType = {
  getProfileData: (userId: number) => void;
  requestStatus: (userId: number) => void;
  updateStatus: (status: string) => void;
  updatePhoto: (file: File) => void;
  setProfile: (profile: ProfileType) => Promise<ProfileType>;
};

const ProfileContainer: React.FC<
  PropsType & MapStatePropsType & MapDispatchPropsType
> = (props) => {
  const refreshProfile = () => {
    let userId = props.params.userId ? props.params.userId : props.authUserId;
    if (!userId) {
      let navigate = useNavigate();
      navigate("/login");
    }
    props.getProfileData(userId);
    props.requestStatus(userId);
  };

  useEffect(() => {
    refreshProfile();
  }, [props.params.userId]);

  return (
    <div className="profile__wrapper">
      <Profile
        isOwner={!props.params.userId}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        updatePhoto={props.updatePhoto}
        {...props}
      />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  profile: getProfile(state),
  status: getStatus(state),
  authUserId: getAuthUserId(state),
  isAuth: getIsAuth(state),
});

export default compose(
  connect(mapStateToProps, {
    getProfileData,
    requestStatus,
    updateStatus,
    updatePhoto,
    setProfile,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
