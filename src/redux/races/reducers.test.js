import { Map } from 'immutable';
import raceReducers from './reducers';
import raceActions from './actions';
import Race from '../../models/race';

describe('Race reducers', () => {
  let state;
  beforeEach(() => {
    state = new Map({ race: {} });
  });

  it('should return initital state', () => {
    const expectedResult = state;
    expect(raceReducers(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the getLatestRaceSuccess action correctly', () => {
    const expectedResult = state
      .set('race', new Race({runners: [{}, {}]}));
    expect(raceReducers(state, raceActions.getLatestRaceSuccess(new Race({runners: [{}, {}]}))))
      .toEqual(expectedResult);
  });

  it('should handle the getLatestRaceError action correctly', () => {
    const expectedResult = state
      .set('race', {});
    expect(raceReducers(state, raceActions.getLatestRaceError(new Race({runners: []}))))
      .toEqual(expectedResult);
  });
});
