import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  increaseLikesCount,
  decreaseLikesCount,
} from "../../../redux/actions/profileActions";
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
      dispatch(addPostActionCreator(postText));
    },
    resetForm: () => {
      dispatch(reset("addPost"));
    },
    increaseLikesCount: (id) => {
      dispatch(increaseLikesCount(id));
    },
    decreaseLikesCount: (id) => {
      dispatch(decreaseLikesCount(id));
    },
  };
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
