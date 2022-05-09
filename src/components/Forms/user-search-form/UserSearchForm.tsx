import React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useSelector } from "react-redux";
import { getUsersFilter } from "../../../redux/selectors/users-selectors";

export interface FilterType {
  term: string;
  isFriend: boolean;
}

type PropsType = {
  setUserFilter: (filter: FilterType) => void;
};

type FriendType = "null" | "false" | "true"

type FormType = {
  term: string,
  isFriend: FriendType
}

export const UserSearchForm: React.FC<PropsType> = ({ setUserFilter }) => {
  const reduxFilter = useSelector(getUsersFilter);

  return (
    <div>
      <h1>Search user</h1>
      <Formik
        initialValues={{
          term: reduxFilter.term as never,
          isFriend: String(reduxFilter.isFriend) as never,
        }}
        enableReinitialize
        onSubmit={(
          values: FilterType,
          { setSubmitting }: FormikHelpers<FilterType>
        ) => {
          setUserFilter(values);
          setSubmitting(false);
        }}
      >
        <Form>
          <Field id="term" name="term" placeholder="Search user..." />
          <Field as="select" name="isFriend">
            <option value="null">All users</option>
            <option value="true">Only followed</option>
            <option value="false">Only unfollowed</option>
          </Field>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
