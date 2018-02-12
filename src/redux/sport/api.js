import axios from 'axios';
import _ from 'lodash';
import Sport from '../../models/sport';
import { baseApi } from '../../constants/api';

async function getSportDetails() {
  try {
    let sport = {};
    const api = `${baseApi}/sports/nextToGo?jurisdiction=NSW`;
    const sports = await axios.get(api);
    const matches = _.get(sports, 'data.matches');
    if (matches.length) {
      const firstMatch = _.first(matches);
      const response = await axios.get(_.get(firstMatch, '_links.self'));
      sport = new Sport(matches.length, firstMatch.competitionName, firstMatch.sportName, response.data);
    }
    return sport;
  } catch (error) {
    throw error;
  }
}

export {
  getSportDetails
}
