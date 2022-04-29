import { connect } from "react-redux";
import { Dialogs } from "./Dialogs";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { compose } from "redux";
import { reset } from "redux-form";
import { addMessage } from "../../redux/actions/dialogsActions";
import { getDialogsPage } from "../../redux/selectors/dialogs-selectors";

let mapStateToProps = (state) => {
  return {
    dialogsPage: getDialogsPage(state),
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (messageText) => {
      dispatch(addMessage(messageText));
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
