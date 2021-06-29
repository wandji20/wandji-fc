import { combineReducers } from 'redux';
import addTodoReducer from './addTodoReducer';
import showFormReducer from './showFormReducer';

const rootReducer = combineReducers(
  {
    addTodo: addTodoReducer,
    showForm: showFormReducer,
  },
);

export default rootReducer;
