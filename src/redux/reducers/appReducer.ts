import { actions } from "redux/actions/appActions";
import { InferActionsType } from '../store/store';
import { SET_INITIALIZING_SUCCESS } from "../../constants/constants";


let initialState = {
  initialized: false,
};

export type InitialStateType = typeof initialState;

export type ActionTypes = InferActionsType<typeof actions>


export const appReducer = (
  state = initialState,
  action: ActionTypes
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
