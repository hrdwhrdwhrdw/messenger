import { IconButton } from "material-ui";
import React from "react";
import "./Post.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Post(props) {
  return (
    <div className="profile__post">
      <img
        src="https://steamuserimages-a.akamaihd.net/ugc/1698402776116313451/993A8BB58E84D0960A398BF731A257A4DB09F261/"
        alt=""
        className="post__image"
      />
      <div className="post__info">
        <div className="post__description">{props.message}</div>
        <div className={"post__button-container" + (props.likesCount !== 0 ? ' wider' : '')}>
          {!props.isLiked ? (
            <IconButton
              className="like-button"
              onClick={() => props.increaseLikesCount(props.id)}
            >
              <FavoriteBorderIcon className="material-icons not-liked bouncy" />
              <span className="like-overlay"></span>
            </IconButton>
          ) : (
            <IconButton
              className="like-button is-active"
              onClick={() => props.decreaseLikesCount(props.id)}
            >
              <FavoriteIcon className="material-icons is-liked bouncy" />
              <span className="like-overlay"></span>
            </IconButton>
          )}
          {props.likesCount !== 0 && <span className={"post__like-counter" + (props.isLiked ? " liked" : "")}>{props.likesCount}</span>}
        </div>
      </div>
    </div>
  );
}
