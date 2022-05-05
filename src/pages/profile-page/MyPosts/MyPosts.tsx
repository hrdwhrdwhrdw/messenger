import React from "react";
import Post from "./Post/Post";
import "./MyPosts.scss";
import AddPostForm from "../../../components/Forms/add-post-form/AddPostForm";
import { PostType } from "../../../types/profile-types";

export type PropsType = {
  posts: Array<PostType>;
  addPost: (postText: string) => void;
  reset: (form: string) => void;
  increaseLikesCount: (id: number) => void;
  decreaseLikesCount: (id: number) => void;
};

export type NewPostType = {
  newPost: string;
};

const MyPosts: React.FC<PropsType> = (props) => {
  let addPost = (values: NewPostType) => {
    if (values.newPost) {
      props.addPost(values.newPost);
      props.reset("addPost");
    }
  };

  let increaseLikesCount = (id: number) => {
    props.increaseLikesCount(id);
  };

  let decreaseLikesCount = (id: number) => {
    props.decreaseLikesCount(id);
  };

  return (
    <div className="profile__posts">
      <AddPostForm onSubmit={addPost} />
      <ul className="profile__postlist">
        {props.posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            message={post.message}
            likesCount={post.likesCount}
            isLiked={post.isLiked}
            increaseLikesCount={increaseLikesCount}
            decreaseLikesCount={decreaseLikesCount}
          />
        ))}
      </ul>
    </div>
  );
};

export default MyPosts;
