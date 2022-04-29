import CustomButton from "../../../components/Button/Button";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { maxLength100 } from "../../../helpers/maxLength";
import { MultiTextarea } from "../../Controls/Textarea/Textarea";
import styles from "./AddPostForm.module.scss";

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
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

const AddPostReduxForm = reduxForm({
  form: "addPost",
})(AddPostForm);

export default AddPostReduxForm;
