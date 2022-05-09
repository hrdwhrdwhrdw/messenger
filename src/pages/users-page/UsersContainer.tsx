import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Preloader from "../../components/Preloader/Preloader";
import {
  getCurrentPage,
  getIsFetching,
  getPageSize,
  getUsersFilter,
} from "../../redux/selectors/users-selectors";
import { requestUsers } from "../../redux/thunks/usersThunks";
import Users from "./Users";
import {
  FilterType,
  UserSearchForm,
} from "../../components/Forms/user-search-form/UserSearchForm";

const UsersContainer: React.FC = () => {
  const dispatch = useDispatch();
  const pageSize = useSelector(getPageSize);
  const currentPage = useSelector(getCurrentPage);
  const propsFilter = useSelector(getUsersFilter);

  useEffect(() => {
    dispatch(requestUsers(pageSize, currentPage, propsFilter));
  }, []);

  const onPageChange = (page: number) => {
    dispatch(requestUsers(pageSize, 1, propsFilter));
  };

  const setUsersFilter = (filter: FilterType) => {
    dispatch(requestUsers(pageSize, currentPage, filter));
  };

  const isFetching = useSelector(getIsFetching);

  return (
    <div className="user__container">
      <UserSearchForm setUserFilter={setUsersFilter} />

      {isFetching ? (
        <Preloader />
      ) : (
        <>
          <Users
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={onPageChange}
            setUsersFilter={setUsersFilter}
          />
        </>
      )}
    </div>
  );
};

export default UsersContainer;
