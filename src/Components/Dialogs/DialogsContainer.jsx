import { connect } from "react-redux";
import {
  addMessageActionCreator,
} from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";
import withAuthRedirect from "../HOC/withAuthRedirect"
import { compose } from "redux";
import { reset } from "redux-form";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (messageText) => {
      dispatch(addMessageActionCreator(messageText))
    },
    reset: () => {
      dispatch(reset("addMessage"))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

