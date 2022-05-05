import { connect } from "react-redux";
import { Dialogs } from "./Dialogs";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { compose } from "redux";
import { reset } from "redux-form";
import { actions } from "../../redux/actions/dialogsActions";
import { getDialogsPage } from "../../redux/selectors/dialogs-selectors";
import { RootState } from '../../redux/store/store';

let mapStateToProps = (state: RootState) => {
  return {
    dialogsPage: getDialogsPage(state),
  };
};

export default compose(
  connect(mapStateToProps, {...actions, reset}),
  withAuthRedirect
)(Dialogs);
