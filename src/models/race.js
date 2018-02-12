import _ from 'lodash';

export default class Race {
  constructor(...data) {
    if (data) {
      Object.assign(this, ...data);
    }
    this.runners = this.runners.slice(0, 6);
  }
}
