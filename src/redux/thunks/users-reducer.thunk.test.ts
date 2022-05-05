import { followUser } from "./usersThunks";
import { UsersAPI } from "../../API/userAPI";
import { DefaultResponseType } from "types/response-type";
import { ResponseCodes } from "types/response-codes";
import { actions } from "../actions/usersActions";

jest.mock("../../API/userAPI");
const UsersMockAPI = UsersAPI as jest.Mocked<typeof UsersAPI>;

const result: DefaultResponseType = {
  data: {},
  resultCode: ResponseCodes.Success,
  messages: ["ERROR"],
};

test("success follow thunk", async () => {
  const thunk = followUser(1);
  const dispatchMock = jest.fn();
  const getState = jest.fn();
  UsersMockAPI.follow.mockReturnValue(Promise.resolve(result));
  await thunk(dispatchMock, getState, {});
  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenCalledWith(
    actions.followingInProgressToggle(true, 1)
  );
  expect(dispatchMock).toHaveBeenCalledWith(actions.follow(1));
  expect(dispatchMock).toHaveBeenCalledWith(
    actions.followingInProgressToggle(false, 1)
  );
});
