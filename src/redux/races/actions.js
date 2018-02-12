import { getRaceDetails } from './api';

const raceActions = {
  GET_LATEST_RACE: 'GET_LATEST_RACE',
  GET_LATEST_RACE_SUCCESS: 'GET_LATEST_RACE_SUCCESS',
  GET_LATEST_RACE_ERROR: 'GET_LATEST_RACE_ERROR',

  getLatestRaceSuccess(race) {
    return {
      type: raceActions.GET_LATEST_RACE_SUCCESS,
      race
    };
  },
  getLatestRaceError(error) {
    return {
      type: raceActions.GET_LATEST_RACE_ERROR,
      error
    };
  },
  getLatestRace: () => {
    return function (dispatch) {
      return getRaceDetails()
        .then(race => {
          dispatch(raceActions.getLatestRaceSuccess(race));
        }).catch(error => {
          dispatch(raceActions.getLatestRaceError(error));
        });
    };
  }
};

export default raceActions;
