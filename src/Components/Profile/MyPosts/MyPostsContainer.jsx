import React from "react";
import MyPosts from "./MyPosts";
import {
  updatePostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer";
import { StoreContext } from "../../../context";

export default function MyPostsContainer() {
  return (
    <div>
      <StoreContext.Consumer>
        {(store) => {
          let state = store.getState().profilePage;
          let addPost = () => {
            store.dispatch(addPostActionCreator());
          };

          let onChangePostText = (postText) => {
            let action = updatePostTextActionCreator(postText);
            store.dispatch(action);
          };
          return <MyPosts
            state={state}
            addPost={addPost}
            onChangePostText={onChangePostText}
          />;
        }}
      </StoreContext.Consumer>
    </div>
  );
}
