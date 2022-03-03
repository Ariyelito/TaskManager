import {createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import tasksReducer from './reducers/tasksReducer';


const rootReducer = combineReducers({
    tasks : tasksReducer
});

const middleware = composeWithDevTools(applyMiddleware(thunk))

export default createStore(
    rootReducer,
    middleware
  );