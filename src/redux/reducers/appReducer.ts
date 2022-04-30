import { SET_INITIALIZING_SUCCESS } from "../../constants/constants";

type InitialStateType = {
  initialized: boolean;
};

let initialState: InitialStateType = {
  initialized: false,
};

export const appReducer = (
  state = initialState,
  action
): InitialStateType => {
  switch (action.type) {
    case SET_INITIALIZING_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    
    default:
      return state;
  }
};
