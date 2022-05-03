import React, { Component } from "react";
import { connect } from "react-redux";
import {
  followUser,
  unfollowUser,
  requestUsers,
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
import { UserType } from "types/user-types";
import { RootState } from "redux/store/store";

type MapStatePropsType = {
  pageSize: number;
  currentPage: number;
  isFetching: boolean;
  totalUsersCount: number;
  portionSize: number;
  users: Array<UserType>;
  followingInProgress: Array<number>;
};

type MapDispatchPropsType = {
  requestUsers: (pageSize: number, currentPage: number) => void;
  followUser: (userId: number) => void;
  unfollowUser: (userId: number) => void;
  setUsers: (users: Array<UserType>) => void;
  setCurrentPage: (page: number) => void;
  isFetchingToggle: (isFetching: boolean) => void;
};

type PropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends Component<PropsType> {
  componentDidMount() {
    this.props.requestUsers(this.props.pageSize, this.props.currentPage);
  }

  onPageChange = (page: number) => {
    this.props.requestUsers(this.props.pageSize, page);
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

let mapStateToProps = (state: RootState) => {
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

export default connect<MapStatePropsType, MapDispatchPropsType>(
  mapStateToProps,
  {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    requestUsers,
    isFetchingToggle,
  }
)(UsersContainer);
