import React from "react";
import "./Users.scss";
import Pagination from "../../helpers/pagination/Pagination";
import { UserType } from "types/user-types";
import User from "./User";

type Props = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  portionSize: number;
  users: Array<UserType>;
  followingInProgress: Array<number>;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
};

const Users: React.FC<Props> = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChange,
  portionSize,
  users,
  followingInProgress,
  follow,
  unfollow,
}) => {
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
