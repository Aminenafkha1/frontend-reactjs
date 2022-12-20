import { combineReducers } from '@reduxjs/toolkit';
import authSlice from '../slices/authSlice';
// import { reducer as notifierReducer } from '../slices/notifier';
// import { reducer as modalsReducer } from '../slices/modals';
import { reducer as userReducer } from '../slices/user';

const combinedReducer = combineReducers({
  // notifier: notifierReducer,
  // modals: modalsReducer,
  auth:authSlice,
  user: userReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    // check for action type
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default combinedReducer;
