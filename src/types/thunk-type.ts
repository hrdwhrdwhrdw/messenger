import { RootState } from "../redux/store/store";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

type ThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, RootState, unknown, A>;
export default ThunkType;

// type AuthThunkType<ExtraActionsType extends Action> = ThunkType<ActionTypes, ExtraActionsType>
