import React, { Component } from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setTotalUsers,
  setCurrentPage,
  isFetchingToggle,
  followingInProgressToggle
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import UsersAPI from "../API/UsersAPI";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.isFetchingToggle(true);
    UsersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(
      (data) => {
        this.props.isFetchingToggle(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsers(data.totalCount);
      }
    );
  }

  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.isFetchingToggle(true);
    UsersAPI.getUsers(this.props.pageSize, page)
    .then((data) => {
      this.props.isFetchingToggle(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <div className="users__list">
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChange={this.onPageChange}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            users={this.props.users}
            isFetching={this.props.isFetching}
            followingInProgress={this.props.followingInProgress}
            followingInProgressToggle={this.props.followingInProgressToggle}
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
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setTotalUsers,
  setCurrentPage,
  isFetchingToggle,
  followingInProgressToggle
})(UsersContainer);
