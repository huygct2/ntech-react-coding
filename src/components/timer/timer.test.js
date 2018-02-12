import React from 'react';
import renderer from 'react-test-renderer';
import Timer from './timer';

test('Timer component', () => {
  const component = renderer.create(
    <Timer time='2018-02-12T11:00:00.000Z' />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
