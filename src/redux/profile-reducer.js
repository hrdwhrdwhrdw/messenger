const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const ADD_NEW_POST = "ADD-NEW-POST";

export const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let newPost = {
        id: state.posts.length + 1,
        message: state.postText,
      };

      // if (newPost.message !== '') {
      //   state.posts.push(newPost);
      // }
      state.posts.push(newPost);
      console.log(state.posts);
      state.postText = "";
      return state;

    case UPDATE_POST_TEXT:
      state.postText = action.postText;
      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_NEW_POST });
export const updatePostTextActionCreator = (postText) => ({
  type: UPDATE_POST_TEXT,
  postText,
});
