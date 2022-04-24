import React from "react";
import "./Users.scss";
import defaultUserPhoto from "./../../assets/images/i.webp";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { Button } from "@material-ui/core";

export default function Users({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChange,
  portionSize,
  ...props
}) {
  return (
    <div className="user__list">
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
                <Button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                  sx={{
                    fontSize: "12px",
                    width: "80px",
                    color: "white",
                    fontWeight: "bold",
                    border: "2px solid #8169ff",
                    borderRadius: "20px",
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "#7663fd",
                    },
                  }}
                >
                  Unfollow
                </Button>
              ) : (
                <Button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.follow(user.id);
                  }}
                  sx={{
                    fontSize: "12px",
                    width: "80px",
                    color: "white",
                    fontWeight: "bold",
                    border: "2px solid #8169ff",
                    borderRadius: "20px",
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "#7663fd",
                    },
                  }}
                >
                  Follow
                </Button>
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
