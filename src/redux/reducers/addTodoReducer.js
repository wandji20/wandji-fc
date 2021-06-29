/* eslint-disable */
import { ADD_TODO } from '../constants';

const initialState = [];
const addTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log(action.payload);
      console.log(state);
      const { todos }= state
      console.log(todos)
      return {
        todos: [...todos].concat({ ...action.payload }),
      };
    default:
      return { todos: state };
  }
};

export default addTodoReducer;
