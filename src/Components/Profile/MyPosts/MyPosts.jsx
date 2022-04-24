import React from "react";
import Post from "./Post/Post";
import "./MyPosts.scss";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { maxLengthCreator } from "../../../validation/validation";
import { MultiTextarea } from "../../common/FormControl/FormControl";
import CustomButton from "../../common/Button/Button";

export default function MyPosts(props) {
  let addPost = (values) => {
    if (values.newPost) {
      props.addPost(values.newPost);
      props.resetForm();
    }
  };

  let increaseLikesCount = (id) => {
    props.increaseLikesCount(id);
  };

  let decreaseLikesCount = (id) => {
    props.decreaseLikesCount(id);
  };

  return (
    <div className="profile__posts">
      <AddPostReduxForm onSubmit={addPost} />
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
}
const maxLength100 = maxLengthCreator(100);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        className="posts__textarea"
        name="newPost"
        placeholder="type new post..."
        validate={[maxLength100]}
        component={MultiTextarea}
        dataType="textarea"
      />
      <div className="posts__buttons">
        <CustomButton type="submit">Add post</CustomButton>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm({
  form: "addPost",
})(AddPostForm);
