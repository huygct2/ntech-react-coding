import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import Enzyme, { shallow } from 'enzyme';
import { Map } from 'immutable';
import thunk from 'redux-thunk';

import RaceContainer from './races';
import Widget from '../../components/widget/widget';
import Race from '../../models/race';

import '../../setup';

describe('Sport', () => {
  let mockStore, store;

  beforeEach(() => {
    mockStore = configureMockStore([thunk]);
    store = mockStore({
      Race: new Map({
        race: new Race({})
      })
    });
  });

  test('it renders Widget component for Races', () => {
    const wrapper = shallow(<RaceContainer store={store} />);
    expect(wrapper.dive().find(Widget)).toHaveLength(1);
  });
});
