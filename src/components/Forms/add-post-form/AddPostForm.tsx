import React from "react";
import CustomButton from "../../Button/Button";
import { InjectedFormProps, reduxForm } from "redux-form";
import { Field } from "redux-form";
import { maxLength100 } from "../../../helpers/maxLength";
import { MultiTextarea } from "../../Controls/Textarea/Textarea";
import styles from "./AddPostForm.module.scss";
import { NewPostType } from "../../../pages/profile-page/MyPosts/MyPosts";

const AddPostForm: React.FC<InjectedFormProps<NewPostType>> = ({
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        className="posts__textarea"
        name="newPost"
        placeholder="type new post..."
        validate={[maxLength100]}
        component={MultiTextarea}
      />
      <div className="posts__button">
        <CustomButton type="submit" className={styles.addPostButton}>
          Add post
        </CustomButton>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm<NewPostType>({
  form: "addPost",
})(AddPostForm);

export default AddPostReduxForm;
