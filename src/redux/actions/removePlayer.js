import { REMOVE_PLAYER } from '../constants';

const removePlayer = (player) => ({
  type: REMOVE_PLAYER,
  payload: player.id,
});
