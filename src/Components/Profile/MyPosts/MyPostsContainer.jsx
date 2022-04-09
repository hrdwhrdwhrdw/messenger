import MyPosts from "./MyPosts";
import {
  addPostActionCreator
} from "../../../redux/profile-reducer";
import { connect} from "react-redux";
import {reset} from 'redux-form';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postText) => {
      dispatch(addPostActionCreator(postText))
    },
    resetForm: () => {
      dispatch(reset("addPost"))
    }
  }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer