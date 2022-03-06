const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const ADD_NEW_POST = "ADD-NEW-POST";

let initialState = {
  posts: [
    { id: 1, message: "hello" },
    { id: 2, message: "hello" },
    { id: 3, message: "hello" },
    { id: 4, message: "hello" },
    { id: 5, message: "hello" },
  ],
  postText: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST: {
      let newPost = {
        id: state.posts.length + 1,
        message: state.postText,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        postText: "",
      };
    }

    case UPDATE_POST_TEXT: {
      return {
        ...state,
        postText: action.postText,
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_NEW_POST });
export const updatePostTextActionCreator = (postText) => ({
  type: UPDATE_POST_TEXT,
  postText,
});
