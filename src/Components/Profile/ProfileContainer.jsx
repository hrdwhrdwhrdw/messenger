import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfileData } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import withAuthRedirect from "../HOC/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.params.userId ? this.props.params.userId : "6411";
    this.props.getProfileData(userId);
  }

  render() {
    return (
      <div className="profile">
        <Profile {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  return <WrappedComponent {...props} params={params} />;
};

export default compose(
  connect(mapStateToProps, { getProfileData }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
