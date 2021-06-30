/* eslint-disable */
import { ADD_PLAYER } from '../constants';

const initialState = { players: [] };
const addPlayerReducer = (state = initialState, action) => {
  const { players } = state;
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state, players: [...players].concat({ ...action.payload }),
      };
    default:
      return { ...state };
  }
};

export default addPlayerReducer;
