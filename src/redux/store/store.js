import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import { authReducer } from '../reducers/authReducer';
import { dialogsReducer } from '../reducers/dialogsReducer';
import { profileReducer } from '../reducers/profileReducer';
import { usersReducer } from '../reducers/usersReducer';
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { appReducer } from '../reducers/appReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;