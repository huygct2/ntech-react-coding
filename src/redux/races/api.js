import moment from 'moment';
import axios from 'axios';
import _ from 'lodash';
import { baseApi } from '../../constants/api';

async function getRaceDetails() {
  try {
    const api = `${baseApi}/racing/dates/${moment().format('YYYY-MM-DD')}/meetings/R/CBY/races?jurisdiction=NSW`
    const races = await axios.get(api)
    const linkDetails = _.get(races, 'data.races.0._links.self')
    const race = await axios.get(linkDetails)
    return _.get(race, 'data')
  } catch (error) {
    throw error
  }
}

export {
  getRaceDetails
}
