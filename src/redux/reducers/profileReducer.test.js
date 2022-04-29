import { addPostActionCreator, profileReducer } from "./profile-reducer";

test("post length should be 5", () => {
  let state = {
    posts: [
      { id: 1, message: "hello" },
      { id: 2, message: "hello" },
      { id: 3, message: "hello" },
      { id: 4, message: "hello" },
      { id: 5, message: "hello" },
    ],
  };
  let action = addPostActionCreator("hello");

  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(6);
});



test("post message should be correct", () => {
  let state = {
    posts: [
      { id: 1, message: "hello" },
      { id: 2, message: "hello" },
      { id: 3, message: "hello" },
      { id: 4, message: "hello" },
      { id: 5, message: "hello" },
    ],
  };
  let action = addPostActionCreator("hello");

  let newState = profileReducer(state, action)

  expect(newState.posts[5].message).toBe("hello");
});
