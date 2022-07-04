import React from "react";
import { IconButton } from "material-ui";
import "./Post.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { PostType } from "../../../../types/profile-types";

type PropsType = {
  increaseLikesCount: (id: number) => void;
  decreaseLikesCount: (id: number) => void;
};

const Post: React.FC<PostType & PropsType> = (props) => {
  return (
    <div className="profile__post">
      <img
        src="https://sunmarsol.ru/wp-content/uploads/2019/12/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0-%D0%BC%D0%B0%D0%BB%D1%8C%D1%87%D0%B8%D0%BA.jpg"
        alt=""
        className="post__image"
      />
      <div className="post__info">
        <div className="post__description">{props.message}</div>
        <div
          className={
            "post__button-container" + (props.likesCount !== 0 ? " wider" : "")
          }
        >
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
          {props.likesCount !== 0 && (
            <span
              className={"post__like-counter" + (props.isLiked ? " liked" : "")}
            >
              {props.likesCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
