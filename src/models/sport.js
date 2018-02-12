import _ from 'lodash';

export default class Sport {
  constructor(marketLength, competitionName, sportName, ...data) {
    if (data) {
      Object.assign(this, ...data);
    }
    this.marketLength = marketLength;
    this.competitionName = competitionName;
    this.sportName = sportName;
  }

  get propositions () {
    return _.get(this, 'markets.0.propositions')
  }
}
