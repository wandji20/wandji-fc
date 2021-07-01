import { ADD_PLAYER } from '../constants';

const initialState = { players: [] };
const addPlayerReducer = (state = initialState, action) => {
  const { players } = state;
  const player = action.payload;
  switch (action.type) {
    case ADD_PLAYER:
      player.id = Date.now();
      return {
        ...state,
        players: [...players].concat({ ...player }),
      };
    default:
      return { ...state };
  }
};

export default addPlayerReducer;
