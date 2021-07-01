import { REMOVE_PLAYER } from '../constants';

const removePlayer = (id) => ({
  type: REMOVE_PLAYER,
  payload: { id },
});

export default removePlayer;
