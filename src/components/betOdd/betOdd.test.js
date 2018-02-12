import React from 'react';
import renderer from 'react-test-renderer';
import BetOdd from './betOdd';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <BetOdd returnWin={1.1} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
