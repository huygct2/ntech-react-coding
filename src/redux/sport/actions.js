import { getSportDetails } from './api';

const sportActions = {
  GET_LATEST_SPORT: 'GET_LATEST_SPORT',
  GET_LATEST_SPORT_SUCCESS: 'GET_LATEST_SPORT_SUCCESS',
  GET_LATEST_SPORT_ERROR: 'GET_LATEST_SPORT_ERROR',

  getLatestSportSuccess(sport) {
    return {
      type: sportActions.GET_LATEST_SPORT_SUCCESS,
      sport
    }
  },
  getLatestSportError(error) {
    return {
      type: sportActions.GET_LATEST_SPORT_ERROR,
      error
    }
  },
  getLatestSport: () => {
    return function (dispatch) {
      return getSportDetails()
        .then(sport => {
          dispatch(sportActions.getLatestSportSuccess(sport));
        }).catch(error => {
          dispatch(sportActions.getLatestSportError(error));
        });
    };
  }
};

export default sportActions;
