import { Map } from "immutable";
import actions from "./actions";

const initState = new Map({
  sport: {}
});

export default function sportReducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_LATEST_SPORT_SUCCESS:
      return state
        .set('sport', action.sport)
    case actions.GET_LATEST_SPORT_ERROR:
      return state
        .set('sport', {})
    default:
      return state;
  }
}
