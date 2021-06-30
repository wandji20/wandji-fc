/* eslint-disable */
import { ADD_PLAYER } from "../constants";

const addPlayer = (data) => {
  return{
    type: ADD_PLAYER,
    payload: data
  }
}
export default addPlayer;