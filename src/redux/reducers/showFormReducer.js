/* eslint-disable */
import {SHOW_FORM} from '../constants';

const initialState =  {toggle:true}
const showFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FORM:
      return {toggle: !state.toggle}
    default:
      return {...state};
  }
};

export default showFormReducer;
