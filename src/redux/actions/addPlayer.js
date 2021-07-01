import { ADD_PLAYER } from '../constants';

const addPlayer = (player) => ({
  type: ADD_PLAYER,
  payload: { player },
});
export default addPlayer;
