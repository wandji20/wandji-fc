import { ADD_PLAYER } from '../constants';

const addPlayer = (data) => ({
  type: ADD_PLAYER,
  payload: data,
});
export default addPlayer;
