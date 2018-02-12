import _ from 'lodash';

export default class Race {
  constructor(...attributes) {
    if (attributes) {
      Object.assign(this, ...attributes)
    }
  }

  get propositions () {
    return _.get(this, 'markets.0.propositions')
  }
}
