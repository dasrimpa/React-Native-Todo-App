import {combineReducers, createStore} from 'redux';
import TodoReducer from './TodoReducer';

const rootReducer = combineReducers({
  TodoReducer: TodoReducer,
});

const store = createStore(rootReducer);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
