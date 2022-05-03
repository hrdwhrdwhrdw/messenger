import { connect } from "react-redux";
import { Dialogs } from "./Dialogs";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { compose } from "redux";
import { reset } from "redux-form";
import { actions } from "../../redux/actions/dialogsActions";
import { getDialogsPage } from "../../redux/selectors/dialogs-selectors";

let mapStateToProps = (state) => {
  return {
    dialogsPage: getDialogsPage(state),
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (messageText) => {
      dispatch(actions.addMessage(messageText));
    },
    reset: () => {
      dispatch(reset("addMessage"));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
