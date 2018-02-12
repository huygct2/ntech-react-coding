import React from 'react';
import renderer from 'react-test-renderer';
import RaceFooter from './raceFooter';

test('RaceFooter component', () => {
  const component = renderer.create(
    <RaceFooter title="View all markets" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
