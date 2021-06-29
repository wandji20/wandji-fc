/* eslint-disable */
import { ADD_TODO } from '../constants';

const initialState = {todos:[]};
const addTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log(action.payload);
      console.log(state);
      const { todos }= state
      console.log(todos)
      return {
        ...state, todos: [...todos].concat({ ...action.payload }),
      };
    default:
      // console.log(state)
      return { ...state };
  }
};

export default addTodoReducer;
