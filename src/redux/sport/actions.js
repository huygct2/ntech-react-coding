import { getSportDetails } from './api';

const sportActions = {
  GET_LATEST_SPORT: 'GET_LATEST_SPORT',
  GET_LATEST_SPORT_SUCCESS: 'GET_LATEST_SPORT_SUCCESS',
  GET_LATEST_SPORT_ERROR: 'GET_LATEST_SPORT_ERROR',

  getLatestSport: () => {
    return function (dispatch) {
      return getSportDetails()
        .then(sport => {
          dispatch({
            type: sportActions.GET_LATEST_SPORT_SUCCESS,
            sport
          });
        }).catch(error => {
          dispatch({
            type: sportActions.GET_LATEST_SPORT_ERROR,
            error
          });
        }); getSportDetails
    };
  }
};

export default sportActions;
