import React, { Component } from "react";
import { connect } from "react-redux";
import {
  followUser,
  unfollowUser,
  requestUsers,
  getUsersAfterChange,
} from "../../redux/thunks/usersThunks";
import {
  setUsers,
  setCurrentPage,
  isFetchingToggle,
} from "../../redux/actions/usersActions";
import Users from "./Users";
import Preloader from "../../components/Preloader/Preloader";
import {
  getUsers,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getPortionSize,
  getTotalUsersCount,
} from "../../redux/selectors/users-selectors";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.requestUsers(this.props.pageSize, this.props.currentPage);
  }

  onPageChange = (page) => {
    this.props.getUsersAfterChange(this.props.pageSize, page);
  };

  render() {
    return (
      <div className="user__container">
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChange={this.onPageChange}
            currentPage={this.props.currentPage}
            portionSize={this.props.portionSize}
            follow={this.props.followUser}
            unfollow={this.props.unfollowUser}
            users={this.props.users}
            followingInProgress={this.props.followingInProgress}
          />
        )}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    portionSize: getPortionSize(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setUsers,
  setCurrentPage,
  requestUsers,
  getUsersAfterChange,
  isFetchingToggle,
})(UsersContainer);
