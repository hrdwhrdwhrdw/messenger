import MyPosts from "./MyPosts";
import { actions } from "../../../redux/actions/profileActions";
import { connect } from "react-redux";
import { reset } from "redux-form";
import { getPosts } from "../../../redux/selectors/profile-selectors";
import { RootState } from "../../../redux/store/store";
import { PostType } from "../../../types/profile-types";

export type MapStatePropsType = {
  post: Array<PostType>;
};

let mapStateToProps = (state: RootState) => {
  return {
    posts: getPosts(state),
  };
};

export default connect(mapStateToProps, {
  addPost: actions.addPostActionCreator,
  reset,
  increaseLikesCount: actions.increaseLikesCount,
  decreaseLikesCount: actions.decreaseLikesCount,
})(MyPosts);
