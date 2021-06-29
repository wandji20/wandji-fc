import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import showFormReducer from './reducers/showFormReducer';

const store = createStore(showFormReducer, applyMiddleware(logger));

export default store;
