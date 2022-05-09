import { InitialStateType, usersReducer } from './usersReducer';
import { actions } from '../actions/usersActions';

test("follow prop should be correct", () => {
  const state: InitialStateType = {
    users: [{
      id: 0,
      name: "Albert Gilmitdinov",
      status: "ewe",
      photos: {
        small: null,
        large: null
      },
      followed: false
    },
    {
      id: 1,
      name: "Dmitry Barinov",
      status: "ewe",
      photos: {
        small: null,
        large: null
      },
      followed: true
    }
  ],
    pageSize: 10,
    currentPage: 1,
    totalUsersCount: 0,
    portionSize: 10,
    isFetching: false,
    followingInProgress: [],
    filter: {
      term: "",
      isFriend: null
    }
  }

  let action = actions.unfollow(1)
  let newState = usersReducer(state, action)
  expect(newState.users[1].followed).toBeFalsy();
})