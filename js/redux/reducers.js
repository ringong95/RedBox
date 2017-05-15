import { combineReducers } from 'redux';
import LoadReducer from './reducers/Loading';
import PostsReducer from './reducers/Posts';
import NavReducer from './reducers/Nav';

export default combineReducers({
  posts: PostsReducer,
  loading: LoadReducer,
  // navigation: NavReducer
});
