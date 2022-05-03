import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import { authReducer } from '../reducers/authReducer';
import { dialogsReducer } from '../reducers/dialogsReducer';
import { profileReducer } from '../reducers/profileReducer';
import { usersReducer } from '../reducers/usersReducer';
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { appReducer } from '../reducers/appReducer';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer
})

export type RootState = ReturnType<typeof rootReducer>

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)));

// @ts-ignore
window.store = store;

export default store;