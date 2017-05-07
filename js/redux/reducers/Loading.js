import { TOGGLELOAD } from './../actions/loadingAction';
const loadInitialState = false;

export default (state = loadInitialState, action) => {
  switch (action.type) {
  case TOGGLELOAD:
    return !state;
  default:
    return state;
  }
};