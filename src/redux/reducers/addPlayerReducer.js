/* eslint-disable */
import { ADD_PLAYER } from '../constants';

const initialState = { players: [] };
const addPlayerReducer = (state = initialState, action) => {
  const { players } = state;
  switch (action.type) {
    case ADD_PLAYER:
      const player = action.payload
      player.id = Date.now()
      return {
        ...state,
        players: [...players].concat({ ...player }),
      };
    default:
      return { ...state };
  }
};

export default addPlayerReducer;
