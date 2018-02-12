import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';
import Widget from './widget';

test('Widget component', () => {
  const time = moment();
  const component = renderer.create(
    <Widget
      typeBet="Soccer"
      time={time}
      timeNow={time}
      title="EPL"
      description="Arsenal"
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
