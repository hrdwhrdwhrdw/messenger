import React from "react";
import Post from "./Post/Post";
import "./MyPosts.scss";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { maxLengthCreator } from "../../../utils/validation";
import { Textarea } from "../../common/FormControl/FormControl";

export default function MyPosts(props) {
  let addPost = (values) => {
    if (values.newPost) {
      props.addPost(values.newPost);
      props.resetForm();
    }
  };

  return (
    <div className="profile__posts">
      <AddPostReduxForm onSubmit={addPost} />
      <ul className="profile__postlist">
        {props.posts.map((post) => (
          <Post key={post.id} id={post.id} message={post.message} />
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
        name="newPost"
        id=""
        cols="25"
        rows="3"
        placeholder="add new post..."
        validate={[maxLength100]}
        component={Textarea}
        dataType="textarea"
      />
      <div className="posts__buttons">
        <button
          className="posts__buttons posts_buttons_add_button"
          type="submit"
        >
          Add post
        </button>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm({
  form: "addPost",
})(AddPostForm);
