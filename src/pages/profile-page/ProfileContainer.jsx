import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getProfileData,
  updateStatus,
  getStatus,
  updatePhoto,
  setProfile,
} from "../../redux/thunks/profileThunks";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { compose } from "redux";
import { withRouter } from "../../hooks/withRouter";

class ProfileContainer extends Component {
  refreshProfile() {
    let userId = this.props.params.userId
      ? this.props.params.userId
      : this.props.authUserId;
    if (!userId) {
      this.props.params.history.push("/login");
    }
    this.props.getProfileData(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.userId !== prevProps.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <div className="profile__wrapper">
        <Profile
          isOwner={!this.props.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          updatePhoto={this.props.updatePhoto}
          {...this.props}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    getProfileData,
    getStatus,
    updateStatus,
    updatePhoto,
    setProfile,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
