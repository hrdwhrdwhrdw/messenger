import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfileData } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.params.userId ? this.props.params.userId : "6411";
    // axios
    //   .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    // .then((response) => {
    //   this.props.setUserProfile(response.data);
    // });
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

const withUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getProfileData })(
  withUrlProfileContainer
);
