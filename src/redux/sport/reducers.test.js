import { Map } from 'immutable';
import sportReducers from './reducers';
import sportActions from './actions';
import Sport from '../../models/sport';

describe('Sport reducers', () => {
  let state;
  beforeEach(() => {
    state = new Map({ sport: {} });
  })

  it('should return initital state', () => {
    const expectedResult = state;
    expect(sportReducers(undefined, {})).toEqual(expectedResult);
  })

  it('should handle the getLatestSportSuccess action correctly', () => {
    const expectedResult = state
      .set('sport', new Sport(20));
    expect(sportReducers(state, sportActions.getLatestSportSuccess(new Sport(20))))
      .toEqual(expectedResult);
  });

  it('should handle the getLatestSportError action correctly', () => {
    const expectedResult = state
      .set('sport', {});
    expect(sportReducers(state, sportActions.getLatestSportError(new Sport(20))))
      .toEqual(expectedResult);
  });
});
