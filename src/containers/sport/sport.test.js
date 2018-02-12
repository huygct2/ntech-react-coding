import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store'
import Enzyme, { shallow } from 'enzyme';
import { Map } from 'immutable';
import thunk from 'redux-thunk'

import SportContainer from './sport';
import Widget from '../../components/widget/widget';
import Sport from '../../models/sport';

import '../../setup';

describe('Sport', () => {
  let mockStore, store

  beforeEach(() => {
    mockStore = configureMockStore([thunk]);
    store = mockStore({
      Sport: new Map({
        sport: new Sport(20, 'EPL', 'Chelsea', { startTime: Date() })
      })
    });
  });

  test('it renders Widget component for Sport', () => {
    const wrapper = shallow(<SportContainer store={store} />);
    expect(wrapper.dive().find(Widget)).toHaveLength(1);
  });
});
