import { combineReducers } from 'redux';
import LoadReducer from './reducers/Loading';
import PostsReducer from './reducers/Posts';
import NavReducer from './reducers/Nav';
import PostReducer from './reducers/Post';

export default combineReducers({
  posts: PostsReducer,
  loading: LoadReducer,
  currentPost: PostReducer,
});
