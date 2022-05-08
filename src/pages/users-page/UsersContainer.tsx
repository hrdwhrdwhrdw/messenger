import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Preloader from '../../components/Preloader/Preloader';
import { getCurrentPage, getIsFetching, getPageSize } from '../../redux/selectors/users-selectors';
import { requestUsers } from '../../redux/thunks/usersThunks';
import Users from './Users';

const UsersContainer: React.FC = () => {
  const dispatch = useDispatch();
  const pageSize = useSelector(getPageSize);
  const currentPage = useSelector(getCurrentPage);

  useEffect(() => {
    dispatch(requestUsers(pageSize, currentPage));
  }, []);

  const onPageChange = (page: number) => {
    dispatch(requestUsers(pageSize, page));
  };

  const isFetching = useSelector(getIsFetching);

  return (
    <div className="user__container">
      {isFetching ? (
        <Preloader />
      ) : (
        <Users
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default UsersContainer;
