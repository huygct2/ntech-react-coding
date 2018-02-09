import { getRaceDetails } from './api';

const raceActions = {
  GET_LATEST_RACE: 'GET_LATEST_RACE',
  GET_LATEST_RACE_SUCCESS: 'GET_LATEST_RACE_SUCCESS',
  GET_LATEST_RACE_ERROR: 'GET_LATEST_RACE_ERROR',

  getLatestRace: () => {
    return function (dispatch) {
      return getRaceDetails()
        .then(race => {
          dispatch({
            type: raceActions.GET_LATEST_RACE_SUCCESS,
            race
          });
        }).catch(error => {
          dispatch({
            type: raceActions.GET_LATEST_RACE_ERROR,
            error
          });
        });
    };
  }
};

export default raceActions;
