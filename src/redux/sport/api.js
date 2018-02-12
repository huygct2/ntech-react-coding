import moment from 'moment';
import axios from 'axios';
import _ from 'lodash';
import Sport from '../../models/sport';
import { baseApi } from '../../constants/api';

async function getSportDetails() {
  try {
    let sport = {};
    const api = `${baseApi}/sports/nextToGo?jurisdiction=NSW&sortByTime=true`;
    const sports = await axios.get(api);
    const firstSport = _.get(sports, 'data.matches.0');
    if (firstSport) {
      const response = await axios.get(_.get(firstSport, '_links.self'));
      sport = new Sport(firstSport.competitionName, firstSport.sportName, response.data);
    }
    return sport;
  } catch (error) {
    throw error;
  }
}

export {
  getSportDetails
};
