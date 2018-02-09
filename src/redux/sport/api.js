import moment from 'moment';
import axios from 'axios';
import _ from 'lodash';
import { baseApi } from '../../constants/api';

async function getSportDetails() {
  try {
    const api = `${baseApi}/sports/nextToGo?jurisdiction=NSW&sortByTime=true`
    const sports = await axios.get(api)
    const linkDetails = _.get(sports, 'data.matches.0._links.self')
    const sport = await axios.get(linkDetails)
    return _.get(sport, 'data')
  } catch (error) {
    throw error
  }
}

export {
  getSportDetails
}
