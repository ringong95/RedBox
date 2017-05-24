import { toggleLoading } from './loadingAction';

export const LOADPOSTS = 'LOADPOSTS';
export const LOADPOST = 'LOADPOST';


const getRequest = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Cache: 'no-cache',
  },
  credentials: 'include',
};


export const fetchPost = (link) => (dispatch) => {
  dispatch(toggleLoading());

  fetch(`https://www.reddit.com/${link}.json`, getRequest)
    .then(response => response.json())
    .then(json => {
  console.log(json)
      dispatch(loadPost(json));
      dispatch(toggleLoading());
    });
};

function loadPost(item) {
  return {
    type: LOADPOST,
    payload: item,
  };
}