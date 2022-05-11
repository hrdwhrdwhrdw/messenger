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
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  FilterType,
  UserSearchForm,
} from "../../components/Forms/user-search-form/UserSearchForm";

const UsersContainer: React.FC = () => {
  const dispatch = useDispatch();
  const pageSize = useSelector(getPageSize);
  const currentPage = useSelector(getCurrentPage);
  const reduxFilter = useSelector(getUsersFilter);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let term = searchParams.get("term");
    let friend = searchParams.get("friend");
    let page = Number(searchParams.get("page"));
    let actualPage = currentPage;
    let actualFilter = reduxFilter;

    page ? (actualPage = page) : null;
    term ? (actualFilter = { ...actualFilter, term: term }) : null;

    switch (friend) {
      case "null":
        actualFilter = { ...actualFilter, isFriend: null };
        break;
      case "true":
        actualFilter = { ...actualFilter, isFriend: true };
        break;
      case "false":
        actualFilter = { ...actualFilter, isFriend: false };
        break;
    }
    dispatch(requestUsers(pageSize, actualPage, actualFilter));
  }, []);

  useEffect(() => {
    navigate({
      search: `?term=${reduxFilter.term}&friend=${reduxFilter.isFriend}&page=${currentPage}`,
    });
  }, [reduxFilter, currentPage]);

  const onPageChange = (page: number) => {
    dispatch(requestUsers(pageSize, page, reduxFilter));
  };

  const setUsersFilter = (filter: FilterType) => {
    dispatch(requestUsers(pageSize, 1, filter));
  };

  const isFetching = useSelector(getIsFetching);

  return (
    <div className="user__container">
      <UserSearchForm setUserFilter={setUsersFilter} />
      {isFetching ? (
        <Preloader />
      ) : (
        <Users
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={onPageChange}
          setUsersFilter={setUsersFilter}
        />
      )}
    </div>
  );
};

export default UsersContainer;
