import { Map } from "immutable";
import actions from "./actions";
import _ from 'lodash'

const initState = new Map({
  loading: false
});

export default function sportReducer(state = initState, action) {
  switch (action.type) {

    default:
      return state;
  }
}
