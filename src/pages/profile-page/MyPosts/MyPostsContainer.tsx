import MyPosts from "./MyPosts";
import { actions } from "../../../redux/actions/profileActions";
import { connect } from "react-redux";
import { reset } from "redux-form";
import { getPosts } from "../../../redux/selectors/profile-selectors";

let mapStateToProps = (state) => {
  return {
    posts: getPosts(state),
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postText) => {
      dispatch(actions.addPostActionCreator(postText));
    },
    resetForm: () => {
      dispatch(reset("addPost"));
    },
    increaseLikesCount: (id) => {
      dispatch(actions.increaseLikesCount(id));
    },
    decreaseLikesCount: (id) => {
      dispatch(actions.decreaseLikesCount(id));
    },
  };
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
