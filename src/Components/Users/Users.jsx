import React from "react";
import "./Users.scss";
import defaultUserPhoto from "./../../assets/images/i.webp";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

export default function Users({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChange,
  portionSize,
  ...props
}) {
  return (
    <div className="users__list">
      {props.users.map((user) => {
        return (
          <div key={user.id} className="user__item">
            <div>
              <Link to={"/profile/" + user.id}>
                <img
                  src={user.photos.small || defaultUserPhoto}
                  alt=""
                  className="user__image"
                />
              </Link>
            </div>
            <div className="user__info">
              <div className="user__name">
                <span>{user.name}</span>
              </div>
              <div className="user__status">
                <span>{user.status}</span>
              </div>
              {user.followed ? (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        );
      })}
      <Pagination
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={onPageChange}
        portionSize={portionSize}
      />
    </div>
  );
}
