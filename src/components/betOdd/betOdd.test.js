import React from 'react';
import renderer from 'react-test-renderer';
import BetOdd from './betOdd';

test('BetOdd component', () => {
  const component = renderer.create(
    <BetOdd returnWin={1.1} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
