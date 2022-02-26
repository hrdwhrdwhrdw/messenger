import React from "react";
import "./Post.scss";

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
        <button className="post__button post__button_like">Like</button>
        <button className="post__button post__button_dislike">Dislike</button>
      </div>
    </div>
  );
}
