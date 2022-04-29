import React from "react";
import "./Users.scss";
import defaultUserPhoto from "./../../assets/images/i.webp";
import { Link } from "react-router-dom";
import Pagination from "../../helpers/pagination/Pagination";
import { Button } from "@material-ui/core";
import { PURPLE, WHITE } from "../../constants/styles";

const Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChange,
  portionSize,
  ...props
}) => {
  const style = {
    fontSize: "12px",
    width: "80px",
    color: WHITE,
    fontWeight: "bold",
    border: "2px solid #8169ff",
    borderRadius: "20px",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: PURPLE,
    },
  };
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
                  sx={style}
                  className="user__button"
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
                  sx={style}
                  className="user__button"
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
};

export default Users;
