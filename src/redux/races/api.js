import axios from 'axios';
import _ from 'lodash';
import Race from '../../models/race';
import { baseApi } from '../../constants/api';

async function getRaceDetails() {
  try {
    let race = {};
    const api = `${baseApi}/racing/next-to-go/races?jurisdiction=NSW`;
    const response = await axios.get(api);
    const races = _.get(response, 'data.races');
    if(races.length) {
      const linkDetails = _.get(races, '0._links.self');
      const response = await axios.get(linkDetails);
      race = new Race(response.data);
    }
    return race;
  } catch (error) {
    throw error;
  }
}

export {
  getRaceDetails
};
