/* eslint-disable */
import { ADD_TODO } from "../constants";

const addTodo = (data) => {
  return{
    type: ADD_TODO,
    payload: data
  }
}
export default addTodo;