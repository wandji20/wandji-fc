import { combineReducers } from 'redux';
import addPlayerReducer from './addPlayerReducer';
import showFormReducer from './showFormReducer';

const rootReducer = combineReducers(
  {
    addPlayer: addPlayerReducer,
    showForm: showFormReducer,
  },
);

export default rootReducer;
