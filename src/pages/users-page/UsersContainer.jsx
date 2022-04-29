import React, { Component } from "react";
import { connect } from "react-redux";
import {
  followUser,
  unfollowUser,
  getUsers,
  getUsersAfterChange,
} from "../../redux/thunks/usersThunks";
import {
  setUsers,
  setCurrentPage,
  isFetchingToggle,
} from "../../redux/actions/usersActions";
import Users from "./Users";
import Preloader from "../../components/Preloader/Preloader";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    portionSize: state.usersPage.portionSize,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setUsers,
  setCurrentPage,
  getUsers,
  getUsersAfterChange,
  isFetchingToggle,
})(UsersContainer);
