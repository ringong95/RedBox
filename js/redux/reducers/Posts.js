const nameInitialState = {};
export default (state = nameInitialState, action) => {
  switch (action.type) {
  case 'LOADPOSTS':
    return action.payload;
  case 'CachePosts':
    return state;
  default:
    return state;
  }
};