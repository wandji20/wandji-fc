import {
  ADD_PLAYER, REMOVE_PLAYER, SHOW_FORM, initialState,
} from '../constants';

const playerReducer = (state = initialState, action) => {
  const { players } = state;
  switch (action.type) {
    case SHOW_FORM: {
      return {
        ...state,
        toggle: !state.toggle,
      };
    }
    case ADD_PLAYER: {
      const { player } = action.payload;
      player.id = Math.random().toString();
      return {
        ...state,
        players: [...players].concat({ ...player }),
      };
    }
    case REMOVE_PLAYER: {
      const { id } = action.payload;
      const newPlayers = [...players].filter((player) => player.id !== id);
      return {
        ...state, players: newPlayers,
      };
    }
    default:
      return { ...state };
  }
};

export default playerReducer;
