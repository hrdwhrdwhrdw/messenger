import React from "react";
import "./Users.scss";
import defaultUserPhoto from "./../../assets/images/i.webp";
import { Link } from "react-router-dom";

export default function Users(props) {
  let pages = [];
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
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
                    props.unfollow(user.id)
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
                    props.follow(user.id)
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        );
      })}
      {pages.map((page) => {
        return (
          <button
            className={page === props.currentPage ? "active" : ""}
            onClick={(e) => props.onPageChange(page)}
            key={page}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
