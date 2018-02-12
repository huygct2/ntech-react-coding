import React from 'react';
import renderer from 'react-test-renderer';
import SportContent from './sportContent';

test('SportContent Component', () => {
  const component = renderer.create(
    <SportContent
      propositions={[]}
      marketLength={20} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
