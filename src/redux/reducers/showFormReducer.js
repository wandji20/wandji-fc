/* eslint-disable */
import SHOW_FORM from '../constants';

const initialState =  true
const showFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FORM:
      console.log(state);
      return !state
    default:
      return state;
  }
};

export default showFormReducer;
