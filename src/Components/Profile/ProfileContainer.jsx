import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfileData, updateStatus, getStatus } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import withAuthRedirect from "../HOC/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.params.userId ? this.props.params.userId : "6411";
    this.props.getProfileData(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <div className="profile">
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  return <WrappedComponent {...props} params={params} />;
};

export default compose(
  connect(mapStateToProps, { getProfileData, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
