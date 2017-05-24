const nameInitialState = {};
export default (state = nameInitialState, action) => {
  switch (action.type) {
  case 'LOADPOST':
    return  { postData:action.payload[0].data.children[0].data, commentData: action.payload[1].data.children};
  case 'CachePosts':
    return state;
  default:
    return state;
  }
};