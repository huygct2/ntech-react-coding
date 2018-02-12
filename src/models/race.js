import _ from 'lodash';

export default class Race {
  constructor(...data) {
    if (data) {
      Object.assign(this, ...data);
    }
    if(this.runners.length > 6) {
      this.runners = this.runners.slice(0, 6);
    }
  }
}
