import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";
import withAuthRedirect from "../HOC/withAuthRedirect"
import { compose } from "redux";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(addMessageActionCreator())
    },
    updateMessageText: (messageText) => {
      dispatch(updateMessageTextActionCreator(messageText))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

