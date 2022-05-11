import React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useSelector } from "react-redux";
import { getUsersFilter } from "../../../redux/selectors/users-selectors";
import CustomButton from "../../Button/Button";
import styles from "./UserSearchForm.module.scss";
export interface FilterType {
  term: string;
  isFriend: boolean;
}

type PropsType = {
  setUserFilter: (filter: FilterType) => void;
};

type FriendType = "null" | "false" | "true";

type FormType = {
  term: string;
  isFriend: FriendType;
};

export const UserSearchForm: React.FC<PropsType> = ({ setUserFilter }) => {
  const reduxFilter = useSelector(getUsersFilter);

  return (
    <div className={styles.form}>
      <h1 className={styles.title}>Search user</h1>
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
          <Field
            id="term"
            name="term"
            placeholder="Search user..."
            className={styles.input}
          />
          <Field as="select" name="isFriend" className={styles.select}>
            <option className={styles.option} value="null">All users</option>
            <option className={styles.option} value="true">Only followed</option>
            <option className={styles.option} value="false">Only unfollowed</option>
          </Field>
          <CustomButton type="submit" className={styles.button}>Submit</CustomButton>
        </Form>
      </Formik>
    </div>
  );
};
