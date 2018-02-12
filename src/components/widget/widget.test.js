import React from 'react';
import renderer from 'react-test-renderer';
import Widget from './widget';

test('Widget component', () => {
  const component = renderer.create(
    <Widget
      typeBet='Soccer'
      time='2018-02-12T11:00:00.000Z'
      title='EPL'
      description='Arsenal'
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
