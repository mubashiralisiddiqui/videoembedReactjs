/**
 * importing action
 */
import { FetchActions } from "../actions/";
/**
 * initializing states
 */
const initialState = {
  details: {}
};
// reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case FetchActions.DETAILS:
      return { ...state, details: action.payload };
    default:
      return state;
  }
}
