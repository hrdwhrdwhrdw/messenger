import './Users.scss';

import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Pagination from '../../helpers/pagination/Pagination';
import { getFollowingInProgress, getPortionSize, getTotalUsersCount, getUsers } from '../../redux/selectors/users-selectors';
import { followUser, unfollowUser } from '../../redux/thunks/usersThunks';
import User from './User';

type PropsType = {
  pageSize: number,
  currentPage: number,
  onPageChange: (page: number) => void;
}

const Users: React.FC<PropsType> = ({pageSize, currentPage, onPageChange}) => {
  const users = useSelector(getUsers);
  const totalUsersCount = useSelector(getTotalUsersCount);
  const portionSize = useSelector(getPortionSize);
  const followingInProgress = useSelector(getFollowingInProgress);

  const dispatch = useDispatch();

  const follow = (userId: number) => {
    dispatch(followUser(userId))
  }

  const unfollow = (userId: number) => {
    dispatch(unfollowUser(userId))
  }

  return (
    <div className="user__list">
      {users.map((user) => (
        <User
          user={user}
          followingInProgress={followingInProgress}
          follow={follow}
          unfollow={unfollow}
          key={user.id}
        />
      ))}
      <Pagination
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={onPageChange}
        portionSize={portionSize}
      />
    </div>
  );
};

export default Users;
