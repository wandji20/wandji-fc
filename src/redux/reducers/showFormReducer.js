import { SHOW_FORM } from '../constants';

const initialState = { toggle: false };
const showFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FORM:
      return { ...state, toggle: !state.toggle };
    default:
      return { ...state };
  }
};

export default showFormReducer;
