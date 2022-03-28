import {combineReducers, createStore} from 'redux';
import {TodoReducer} from './TodoReducer';

const rootReducer = combineReducers({
  TodoReducer: TodoReducer,
});

const store = createStore(rootReducer);

export default store;
