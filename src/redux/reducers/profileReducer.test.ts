import {  InitialStateType, profileReducer } from "./profileReducer";
import {actions} from '../actions/profileActions';

test("post length should be 5", () => {
  const state: InitialStateType ={
    posts: [
      { id: 1, message: "hello", likesCount: 0, isLiked: false },
      { id: 2, message: "hello", likesCount: 0, isLiked: false },
      { id: 3, message: "hello", likesCount: 0, isLiked: false },
      { id: 4, message: "hello", likesCount: 0, isLiked: false },
      { id: 5, message: "hello", likesCount: 0, isLiked: false },
    ],
    profile: null,
    status: "status"
  };
  let action = actions.addPostActionCreator("hello");

  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(6);
});



test("post message should be correct", () => {
  let state = {
    posts: [
      { id: 1, message: "hello", likesCount: 0, isLiked: false  },
      { id: 2, message: "hello", likesCount: 0, isLiked: false  },
      { id: 3, message: "hello", likesCount: 0, isLiked: false  },
      { id: 4, message: "hello", likesCount: 0, isLiked: false  },
      { id: 5, message: "hello", likesCount: 0, isLiked: false  },
    ],
    profile: null,
    status: "status"
  };
  let action = actions.addPostActionCreator("hello");

  let newState = profileReducer(state, action)

  expect(newState.posts[5].message).toBe("hello");
});
