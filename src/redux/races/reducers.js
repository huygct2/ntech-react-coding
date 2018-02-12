import { Map } from "immutable";
import actions from "./actions";

const initState = new Map({
  race: {}
});

export default function raceReducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_LATEST_RACE_SUCCESS:
      return state
        .set('race', action.race);
    case actions.GET_LATEST_RACE_ERROR:
      return state
        .set('race', {});
    default:
      return state;
  }
}
