import { REMOVE_PLAYER } from '../constants';

const removePlayerReducer = (state, action) => {
  const id = action.payload;
  const { players } = state;
  console.log(id);
  const newPlayers = [...players].filter((player) => player.id !== id);
  switch (action.type) {
    case REMOVE_PLAYER:
      return {
        ...state, players: newPlayers,
      };

    default:
      return { ...state };
  }
};

export default removePlayerReducer;
