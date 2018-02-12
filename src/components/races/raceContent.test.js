import React from 'react';
import renderer from 'react-test-renderer';
import RaceContent from './raceContent';

test('RaceFooter component', () => {
  const component = renderer.create(
    <RaceContent runners={[{}, {}]} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
