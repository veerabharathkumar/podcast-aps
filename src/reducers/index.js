import { combineReducers } from "redux";
import { reducer as forms } from 'redux-form';
import listReducer from './listReducer';

const appReducer = combineReducers({
  form: forms,
  list: listReducer
});
const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;