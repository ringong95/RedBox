import { toggleLoading } from './loadingAction';

export const LOADPOSTS = 'LOADPOSTS';

const getRequest = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Cache: 'no-cache',
  },
  credentials: 'include',
};

export const fetchPosts = () => (dispatch) => {
  dispatch(toggleLoading());
  fetch('https://www.reddit.com/.json', getRequest)
    .then(response => response.json())
    .then(json => {
      dispatch(loadPosts(json));
      dispatch(toggleLoading());
    });
};

function loadPosts(items) {
  return {
    type: LOADPOSTS,
    payload: items.data.children,
  };
}