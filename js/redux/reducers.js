import { combineReducers } from 'redux';
import LoadReducer from './reducers/Loading';
import PostsReducer from './reducers/Posts';

export default combineReducers({
  posts: PostsReducer,
  loading: LoadReducer,
});
