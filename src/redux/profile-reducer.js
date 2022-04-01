import ProfileAPI from "../Components/API/ProfileAPI";

// constants
const ADD_NEW_POST = "ADD_NEW_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const GET_STATUS = "GET_STATUS";

// initial state
let initialState = {
  posts: [
    { id: 1, message: "hello" },
    { id: 2, message: "hello" },
    { id: 3, message: "hello" },
    { id: 4, message: "hello" },
    { id: 5, message: "hello" },
  ],
  profile: null,
  status: ""
};


//switch-case reducer
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST: {
      let newPost = {
        id: state.posts.length + 1,
        message: action.postText,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    case GET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    default:
      return state;
  }
};

// action-creator functions
export const addPostActionCreator = (postText) => ({ type: ADD_NEW_POST, postText });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

// thunk-functions
export const getProfileData = (userId) => (dispatch) => {
  ProfileAPI.getUserData(userId).then((response) => {
    dispatch(setUserProfile(response));
  });
};

export const updateStatus = (status) => (dispatch) => {
  ProfileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export const getStatus = (userId) => (dispatch) => {
  ProfileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response));
  });
};
